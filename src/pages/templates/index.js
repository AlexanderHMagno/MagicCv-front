import React, {useState, useContext} from 'react';

import { Grid, Card, Icon, Image, Button, Segment, Input, Header, Transition } from 'semantic-ui-react';
import {useQuery} from '@apollo/client';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import {AuthContext} from '../../context/AuthContext';
import PDFVIEW from './options/basic';
import {GET_PROFILE} from '../../graphql/queries';
import Loader from '../../util/loader';
import Gravatar from 'react-gravatar';



const Templates = () => {

    const [imageHV, setImageHv] = useState("");
    const [option, setOption] = useState(true);
    const [template, setTemplate] = useState('back1');
    const [color, setColor] = useState("#3941E4");

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
                <Card fluid>
                    <Card.Content>
                    <Card.Header onClick={()=>setOption(!option)}>Options</Card.Header>
                        <Card.Description>
                        <label htmlFor="background" className="mr-10">Background</label>
                        <input onChange={(e)=>setColor(e.target.value)} type="color" id="background" name="background" defaultValue={color}/>
                        </Card.Description>
                    </Card.Content>
                </Card>


                <Card fluid >
                    <Card.Content>
                        <Card.Header>Templates</Card.Header>
                    </Card.Content>
                    <Card.Description >
                    <Carousel infiniteLoop={true}>
                            <div  className="cursor-pointer" onClick={()=>setTemplate('back1')}>
                                <Image onClick={()=> console.log('al') } src='images/cv1.png'  />
                            </div>
                            <div  className="cursor-pointer" onClick={()=>setTemplate('back2')}>
                                <Image minwidht="200" className="cursor-pointer" src='images/cv2.png'  />
                            </div>

                    </Carousel>
                        
                      
                    </Card.Description>
                    
                </Card>
            </Grid.Column>
            <Grid.Column width={1}>

            </Grid.Column>
            <Grid.Column width={8} className="h-screen">

                <PDFVIEW info={data.getProfile} options={{color,template}}/>
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