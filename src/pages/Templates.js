import React, {useState} from 'react';
import Feature from './profile/util/container';
import ChangePicture from './profile/modal/Picture';
import MasterModal from './profile/modal/MasterModal';

import { Grid, Card, Icon, Image, Button, Segment } from 'semantic-ui-react';

const Templates = () => {

    const [imageHV, setImageHv] = useState("");

    return ( 

        <Grid stackable>
            <Grid.Column width={4}  >  
                <Segment vertical className="max-h-screen overflow-auto">
                    <Card fluid onClick={()=>setImageHv('images/cv1.png')}>
                        <Card.Content>
                        <Card.Header>Template 1</Card.Header>
                            <Card.Description>
                                <Image className="cursor-pointer" src='images/cv1.png' wrapped ui={false} />
                                Person looking for a job
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card fluid onClick={()=>setImageHv('images/cv2.png')}>
                        <Card.Content>
                        <Card.Header>Template 2</Card.Header>
                            <Card.Description>
                                <Image className="cursor-pointer" src='images/cv2.png' wrapped ui={false} />
                                Person looking for a job
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card fluid onClick={()=>setImageHv('images/cv3.png')}>
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
            <Grid.Column width={2}>

            </Grid.Column>
            <Grid.Column width={8}>
                {imageHV && 
                    <Segment vertical className="max-h-screen">
                        <Card fluid>
                            <Card.Content>
                                <Card.Description>
                                    <Image className="cursor-pointer" src={imageHV} wrapped ui={false} />
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Segment>
                }      
            </Grid.Column>             
        </Grid>
     );
}

export default Templates;