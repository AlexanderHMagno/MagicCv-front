import React from 'react'
import { Button, Modal, Popup } from 'semantic-ui-react';


import Education from './Education';
import Experience from './Experience';
import Volunteer from './Volunteer';
import Skills from './Skills';
import Basic from './Basic';
import Delete from '../util/deleteOption';


function MODALINFO({children, code, info}) {
  const [open, setOpen] = React.useState(false)
  let size = 'small';
  let basic = false;
  let displayDelete = true;
  let display;
    switch (code) {
        case 'Education':
            display = <Education info={info} closeModal={setOpen}/>
            break;
        case 'Experience':
            display = <Experience info={info} closeModal={setOpen}/>
            break;
        case 'Volunteer':
            display = <Volunteer info={info} closeModal={setOpen}/>
            break;
        case 'Skills':
            // basic = true;
            size = "mini";
            display = <Skills info={info} closeModal={setOpen}/>
            break;
        case 'Bio':
          displayDelete = false;
          size = "mini";
          display = <Basic info={info} closeModal={setOpen}/>
          break;
        default:
            display = <h1>{code}</h1>
            break;
    }
  
  
  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={children}
      size={size}
      basic ={basic}
    >
      <Modal.Header>
          {info? 'Edit': 'Add'} {code}
          
          <Popup
            inverted
            position ="bottom center"
            content = 'Close'
            trigger={ <Button onClick={()=>  setOpen(false)} floated="right" icon="remove"  color="red" inverted circular size="tiny"/>}
          />
          
          {info && displayDelete? <Delete info={info} code={code} closeModal={setOpen}/>: ''}
      </Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
           {display}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
      </Modal.Actions>
    </Modal>
  )
}

export default MODALINFO