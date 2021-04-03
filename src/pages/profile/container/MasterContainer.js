import React from 'react'
import Education from './Education';
import Experience from './Experience';
import Volunteer from './Volunteer';
import Skills from './Skills';
import Blank from './Blank';


function CONTAINERINFO({children, code, info, none}) {
  let display = <Experience code={code} info={info}/>;
    switch (code) {
        case 'Education':
            display = <Education/>
            break;
        case 'Experience':
            display = <Experience code={code} info={info}/>
            break;
        case 'Volunteer Experience':
            display = <Volunteer/>
            break;
        // case 'Skills':
            // display = <Skills/>
            // break;
        default:
            display = <Blank code={none}/>
            break;
    }
  
  
  return (
    <>
      {display}
    </>
  )
}

export default CONTAINERINFO