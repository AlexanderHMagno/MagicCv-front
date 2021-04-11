import React, {useState, useContext} from 'react';

import { Grid, Card, Icon, Image, Button, Segment } from 'semantic-ui-react';
import {useQuery} from '@apollo/client';


import {AuthContext} from '../../context/AuthContext';
import PDFVIEW from './options/basic';
import {GET_PROFILE} from '../../graphql/queries';
import Loader from '../../util/loader';
import Gravatar from 'react-gravatar';





const Templates = () => {

    const [imageHV, setImageHv] = useState("");
    const [option, setOption] = useState("");

    const {user:{username, id, email,createdAt}} = useContext(AuthContext);
    const {loading, data} = useQuery(GET_PROFILE, {
        variables : {
            userId:id
        }
    })
    
    if (loading) return <Loader/>;
    const {address, first, last, bio, city, country,phone,picture_url,experience,education,volunteer,skills} = data.getProfile || {};



    const downloadPdf  = () => {


        // playground requires you to assign document definition to a variable called dd

    
    }

    return ( 

        <Grid stackable>
            <Grid.Column width={4}  >  
                <Segment vertical className="max-h-screen overflow-auto">
                    <Card fluid onClick={()=>{setImageHv('images/cv1.png');setOption("")}}>
                        <Card.Content>
                        <Card.Header>Template 1</Card.Header>
                            <Card.Description>
                                <Image className="cursor-pointer" src='images/cv1.png' wrapped ui={false} />
                                Person looking for a job
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card fluid onClick={()=>{setImageHv('images/cv2.png');setOption("Drastical")}}>
                        <Card.Content>
                        <Card.Header>Template 2</Card.Header>
                            <Card.Description>
                                <Image className="cursor-pointer" src='images/cv2.png' wrapped ui={false} />
                                Person looking for a job
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card fluid onClick={()=>{setImageHv('images/cv3.png');setOption("Polygon")}}>
                        <Card.Content>
                        <Card.Header>Template 3</Card.Header>
                            <Card.Description>
                                <Image className="cursor-pointer" src='images/cv3.png' wrapped ui={false} />
                                Person looking for a job
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Segment>  
            </Grid.Column>
            <Grid.Column width={1}>

            </Grid.Column>
            <Grid.Column width={8}>

                <PDFVIEW info={data.getProfile}/>
                {/* {imageHV && 
                    <Segment vertical className="max-h-screen">
                        <Card fluid onClick={()=>downloadPdf()}>
                            <Card.Content>
                                <Card.Description>
                                    <Image className="cursor-pointer" src={imageHV} wrapped ui={false} />
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Segment>
                }       */}
            </Grid.Column>             
        </Grid>
     );
}

export default Templates;