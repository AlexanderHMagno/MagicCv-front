import React, {useState, useContext} from 'react';

import { Grid, Card} from 'semantic-ui-react';
import {useQuery} from '@apollo/client';
import {AuthContext} from '../../context/AuthContext';
import PDFVIEW from './structure/templates';
import {GET_PROFILE} from '../../graphql/queries';
import Loader from '../../util/loader';
import Options from './options/options';

import {DEFAULTCONFIG} from './options/templateOptions';
import {OrganizeTemplateData} from '../../util/organizeCandidateData';





const Templates = () => {
    
    const [options, setOptions] = useState(DEFAULTCONFIG);

    const handleOptions = (({group,subGroup,setting,value}) => {
        setOptions(
            {...options,
                [group]:{...options[group],
                    [subGroup]: {...options[group][subGroup], [setting]: value}}
            })
        console.log(options);
    })

    // TODO: Query should come from the same place that setting the CV
    const {user:{username, id, email,createdAt}} = useContext(AuthContext);
    let {loading, data} = useQuery(GET_PROFILE, { variables :{userId:id}})

    if (loading) return <Loader/>;
    data = OrganizeTemplateData(data);
    return ( 

        <Grid stackable>
            <Grid.Column width={5}  >  
                <Card fluid>
                    <Card.Content>
                    <Card.Header>Options</Card.Header>
                        <Options handleOption={handleOptions} setOptions={setOptions} options={options}/>
                    <br></br></Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={8} className="h-screen">
                <PDFVIEW info={{...data.getProfile,email}} options={options}/>
            </Grid.Column>             
        </Grid>
     );
}

export default Templates;