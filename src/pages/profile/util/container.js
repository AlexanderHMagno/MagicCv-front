import React from 'react';
import { Container, Grid , Icon, Header, Card, Segment } from 'semantic-ui-react';
import MasterModal from '../modal/MasterModal';

const Experience = ({code}) => {

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
                        <Card
                            link
                            fluid
                            className="profileoptionContainer"
                            header='Rick Sanchez'
                            meta='Scientist'
                            description={[
                            'Rick is a genius scientist whose alcoholism and reckless,',
                            ' nihilistic behavior are a source of concern for his family.',
                            ].join('')}
                        />
                        </Grid.Column>    
                    </Grid.Row>
                </Grid>

        </Container>

    )
}


export default Experience;