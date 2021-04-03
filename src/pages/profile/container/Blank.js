import React from 'react';
import { Card } from 'semantic-ui-react';
import MasterModal from '../modal/MasterModal';

const Experience = ({code}) => {
    return (
        <MasterModal code={code} >
        <Card link fluid className="profileoptionContainer"> 
            <Card.Content>
                <Card.Description>
                    Add your first {code}    
                </Card.Description>
            </Card.Content>
        </Card>
        </MasterModal>
    )
}


export default Experience;