import React, {useContext} from 'react';
import Feature from './profile/util/container';
import ChangePicture from './profile/modal/Picture';
import MasterModal from './profile/modal/MasterModal';

import { Grid, Card, Icon, Image, Button } from 'semantic-ui-react';

const DASHBOARD = () => {

    return ( 

        <Grid>
            <Grid.Column width={10}>
                <Feature code="Experience"/>
                <Feature code="Education"/>
                <Feature code="Volunteer Experience"/>
                <Feature code="Skills"/>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>    
            <Grid.Column width={4}  >    
                <Card>
                    <ChangePicture trigger={<Image as={Button} src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />}/>
                    
                    <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Meta>Vancouver, Canada</Card.Meta>
                    <Card.Description>
                        Person looking for a job
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <MasterModal code="Bio">
                        <Button color='teal' fluid>
                            Edit Bio
                        </Button>
                    </MasterModal>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>Contact Information</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <p> <Icon color="teal" name='phone' />778-7518081</p>
                        <p> <Icon color="teal" name='location arrow' />303 Columbia Street</p>
                        <p> <Icon color="teal" name='mail' />alexander.hortua10@gmail.com</p>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
     );
}

export default DASHBOARD;