import React, {useState, useContext} from 'react';

import { Grid, Card} from 'semantic-ui-react';
import {useQuery} from '@apollo/client';
import {AuthContext} from '../../context/AuthContext';
import PDFVIEW from './structure/templates';
import {GET_PROFILE} from '../../graphql/queries';
import Loader from '../../util/loader';
import Options from './options/options';

import {DEFAULTCONFIG} from './options/templateOptions';





const Templates = () => {

    
    const [template, setTemplate] = useState('bluewave');
    const [color, setColor] = useState("#010332");
    const [backgroundColor, setBackground] = useState("#FFFFFF");
    const [picture, setPicture] = useState("photo");
    const [titleFont, setTitleFont] = useState("Roboto");
    const [nameSize, setNameSize] = useState(35);
    
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
    const {loading, data} = useQuery(GET_PROFILE, { variables :{userId:id}})


    
    if (loading) return <Loader/>;
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