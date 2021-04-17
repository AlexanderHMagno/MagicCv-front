import React, {useState, useContext} from 'react';

import { Grid, Card,Select, Icon, Image, Button, Segment, Input, Header, Transition } from 'semantic-ui-react';
import {useQuery} from '@apollo/client';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import {AuthContext} from '../../context/AuthContext';
import PDFVIEW from './options/templates';
import {GET_PROFILE} from '../../graphql/queries';
import Loader from '../../util/loader';
import Gravatar from 'react-gravatar';



const Templates = () => {

    const [option, setOption] = useState(true);
    const [template, setTemplate] = useState('bluewave');
    const [color, setColor] = useState("#010332");
    const [picture, setPicture] = useState("photo");

    const {user:{username, id, email,createdAt}} = useContext(AuthContext);
    const {loading, data} = useQuery(GET_PROFILE, {
        variables : {
            userId:id
        }
    })
    
    if (loading) return <Loader/>;
    return ( 

        <Grid stackable>
            <Grid.Column width={4}  >  
                <Card fluid>
                    <Card.Content>
                    <Card.Header onClick={()=>setOption(!option)}>Options</Card.Header>
                        <Card.Description>
                        <label htmlFor="background" className="mr-10">Background</label>
                        <input onChange={(e)=>setColor(e.target.value)} type="color" id="background" name="background" defaultValue={color}/>
                        <br></br>
                        <label>Display Picture</label>
                        <Select   onChange={(e,{name, value})=> setPicture(value)}  placeholder='Picture' defaultValue="photo" options={
                            [{key:'1',value: 'photo', text:'Photo'},{key:'2',value: 'acronym', text:'Acronym'}]} />
                        </Card.Description>
                    </Card.Content>
                </Card>


                <Card fluid >
                    <Card.Content>
                        <Card.Header>Templates</Card.Header>
                    </Card.Content>
                    <Card.Description >
                        <Carousel showThumbs={false} infiniteLoop={true}>
                                <div  className="cursor-pointer" onClick={(e)=>setTemplate('bluewave')}>
                                    <Image src='images/cv2.png'  />
                                </div>
                                <div  className="cursor-pointer" onClick={()=>setTemplate('triwave')}>
                                    <Image src='images/cv1.png'  />
                                </div>
                                <div  className="cursor-pointer" onClick={()=>setTemplate('topwave')}>
                                    <Image src='images/cv3.png'  />
                                </div>
                        </Carousel>
                    </Card.Description>
                </Card>
            </Grid.Column>
            <Grid.Column width={1}>

            </Grid.Column>
            <Grid.Column width={8} className="h-screen">
                <PDFVIEW info={data.getProfile} options={{color,template,picture}}/>
            </Grid.Column>             
        </Grid>
     );
}

export default Templates;