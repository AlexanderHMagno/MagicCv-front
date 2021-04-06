import React from 'react';
import { Card } from 'semantic-ui-react';
import Moment from 'moment';
import MasterModal from '../modal/MasterModal';

const Volunteer = ({info,code}) => {
    const {id,organization,role,location, description, startMonth, startYear, current,
        endYear, endMonth
    } = info || {};

    const lastday = current ? Moment() : Moment(`${endYear}-${endMonth}-01`);
    const difference = Moment(`${startYear}-${startMonth}-01`).from(lastday,true);
    const currentJob = (current ? "Present" : `${endMonth}/${endYear}`) + " " + difference;
    
    return (
        <MasterModal code={code} info={info}>
        <Card link  fluid className="profileoptionContainer"> 
            <Card.Content>
                <Card.Header>
                    {role}
                </Card.Header>
                    <p>{organization}</p>
                <Card.Meta>
                    <small className='date'>{startMonth}/{startYear} - {currentJob}</small>
                    <br></br>
                    <small>{location}</small>
                </Card.Meta>
                <Card.Description className="whitespace-pre-wrap">
                {description}
                </Card.Description>
            </Card.Content>  
        
        </Card>
        </MasterModal>

    )
}


export default Volunteer;