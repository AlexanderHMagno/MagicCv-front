import React from 'react';
import { Container, Grid , Icon, Header, Card, Button } from 'semantic-ui-react';
import MasterModal from '../modal/MasterModal';

const Experience = ({code}) => {

    return (

        <Container className="profileContainer">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={15}>  
                        <Header as="h3">
                            {code} 
                        </Header>
                            
                        </Grid.Column> 
                        <Grid.Column width={1}> 
                        <MasterModal code={code}>
                            <Icon link color="teal" name='add circle'/>
                        </MasterModal>
                            
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