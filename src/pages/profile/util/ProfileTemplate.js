import React from 'react';
import { Container, Grid , Icon, Header, Transition } from 'semantic-ui-react';
import MasterModal from '../modal/MasterModal';
import MasterContainer from '../container/MasterContainer';
import {OrganizeCandidateData} from '../../../util/organizeCandidateData'

const ProfileTemplate = ({code, information}) => {

    //sort
    information = OrganizeCandidateData(code,information);

    return (

        <Container className="profileContainer">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>  
                            <Header size='tiny' floated='right' className="margin-zero">
                                <MasterModal code={code} >
                                    <Icon size="mini" className="primary-font cursor-pointer margin-zero" name='add circle'/>
                                </MasterModal>
                            </Header>
                            <Header as='h2' floated='left'>
                            {code}
                            </Header>
                        </Grid.Column> 
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={15}> 
                        
                            {information && (information.length > 0) ? 
                                information.map((info,index) => 
                                <Transition animation="scale" duration="1500" key={index}>
                                    <MasterContainer  info={info} code={code}/>
                                </Transition>
                                )
                            :
                            <MasterContainer  none={code}/>
                            }   
                        
                        </Grid.Column> 
                    </Grid.Row>
                </Grid>

        </Container>

    )
}


export default ProfileTemplate;