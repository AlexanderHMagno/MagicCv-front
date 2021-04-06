import React from 'react';
import { Card } from 'semantic-ui-react';
import MasterModal from '../modal/MasterModal';

const Education = ({info,code}) => {
    const {id, school, degree ,field, description, startYear, endYear
    } = info || {};

    return (
        <MasterModal code={code} info={info}>
        <Card link  fluid className="profileoptionContainer"> 
            <Card.Content>
                <Card.Header>
                    {degree}
                </Card.Header>
                    <p>{school}</p>
                <Card.Meta>
                    <small className='date'>{startYear} - {endYear}</small>
                    <br></br>
                    <small>{field}</small>
                </Card.Meta>
                <Card.Description className="whitespace-pre-wrap">
                {description}
                </Card.Description>
            </Card.Content>  
        
        </Card>
        </MasterModal>

    )
}


export default Education;