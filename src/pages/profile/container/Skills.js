import React, {useState} from 'react';
import {Button, Search, Segment, Header} from 'semantic-ui-react';
import MasterModal from '../modal/MasterModal';


const Skills = ({info,code}) => {

  const {label, rate} = info;
  let color = 'green';

  if (rate < 3) color =  'red';
  else if (rate < 5) color =  'orange';
  else if (rate < 7) color =  'green';
  else if (rate < 9) color =  'teal';

    return (

        <MasterModal code={code} info={info}>       
          <Button  color={color} size="mini" className={`badge m-1 cursor-pointer`}>
              {`${label} (${rate})`}
          </Button>
        </MasterModal>
    )
}



export default Skills;