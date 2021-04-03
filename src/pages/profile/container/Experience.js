import React from 'react';
import { Card } from 'semantic-ui-react';
import Moment from 'moment';
import MasterModal from '../modal/MasterModal';

const Experience = ({info,code}) => {
    const {id,title,typeExp,company,location, description, startMonth, startYear, current,
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
                    {title}
                </Card.Header>
                    <p>{company}</p>
                <Card.Meta>
                    <small className='date'>{startMonth}/{startYear} - {currentJob}</small>
                    <br></br>
                    <small>{typeExp} - {location}</small>
                </Card.Meta>
                <Card.Description className="whitespace-pre-wrap">
                {description}
                </Card.Description>
            </Card.Content>  
        
        </Card>
        </MasterModal>

    )
}


export default Experience;