import React, {useState, useContext} from 'react';

import { Grid, Card} from 'semantic-ui-react';
import {useQuery} from '@apollo/client';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import {AuthContext} from '../../context/AuthContext';
import PDFVIEW from './structure/templates';
import {GET_PROFILE, GET_TEMPLATES} from '../../graphql/queries';
import Loader from '../../util/loader';
import Options from './options/options';

import {DEFAULTCONFIG} from './options/templateOptions';
import {checkMinimumData} from '../../util/organizeCandidateData';



const optionMissing = {
    first: 'First Name',
    last: 'Last Name',
    education: 'Education',
    experience: 'Experience'
}


const Templates = () => {
    
    const [options, setOptions] = useState(DEFAULTCONFIG);
    const [viewSaveButton, setVisibilityButton] = useState(false);

    const handleOptions = (({group,subGroup,setting,value, string = false}) => {

        
        if (string) {
            setOptions({
                ...options,
                [group] : value
            });
        } else {
            setOptions(
                {...options,
                    [group]:{...options[group],
                        [subGroup]: {...options[group][subGroup], [setting]: value}}
                })
        }

        setVisibilityButton(true);
    })

    // TODO: Query should come from the same place that setting the CV
    const {user:{username, id, email,createdAt}} = useContext(AuthContext);
    const {loading, data} = useQuery(GET_PROFILE, { variables :{userId:id}});
    const {loading:loadingTemplate, data :TemplateData} =  useQuery(GET_TEMPLATES, { variables :{userId:id}});
    const {getTemplates} = TemplateData || {};
    if (loading) return <Loader/>;
    const {valid, dataValidated, missingData} = checkMinimumData(data);
    
   
    
    return ( 
        <>
        {valid ?
            <Grid stackable className="flex flex-col-reverse">
            <Grid.Column width={5}  >  
                <Card fluid>
                    <Card.Content>
                            <Card.Header>Templates</Card.Header>
                            <Options 
                                handleOption={handleOptions} 
                                setOptions={setOptions} 
                                options={options} 
                                TemplateData={getTemplates} 
                                setVisibilityButton={setVisibilityButton}/>
                        <br></br>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={8} className="sm:h-screen">
                <PDFVIEW info={{...dataValidated.getProfile,email}} options={options} viewSaveButton={{view:viewSaveButton,action:setVisibilityButton}}/>
            </Grid.Column>             
        </Grid>
            
            : 
            <Container style={{height:'100vh'}}>
                <Typography variant="h4">
                    Missing Information
                </Typography>
                <Typography variant="body1">
                    Please. Fill this information in your profile.
                </Typography>
                <Grid.Column width={8} className="flex justify-around p-20 ">
                    
                    {missingData.map((e,i)=> {
                        const data = Object.entries(e);
                        
                        return <div  key={i} className="flex flex-col items-center" >
                            <CheckCircleIcon fontSize="large" color={data[0][1] ? 'disabled' : 'primary'}/>
                            <Typography variant="subtitle1">{optionMissing[data[0][0]]}</Typography>   
                        </div>
                })}
                </Grid.Column>   

            </Container>
        }
       </>
     );
}

export default Templates;