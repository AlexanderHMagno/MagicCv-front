import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react';
import Education from './Education';
import Experience from './Experience';
import Volunteer from './Volunteer';
import Skills from './Skills';

function MODALINFO({children, code}) {
  const [open, setOpen] = React.useState(false)
  let size = 'small';
  let basic = false;
  
  let display;
    switch (code) {
        case 'Education':
            display = <Education/>
            break;
        case 'Experience':
            display = <Experience/>
            break;
        case 'Volunteer Experience':
            display = <Volunteer/>
            break;
        case 'Skills':
            basic = true;
            size = "mini";
            display = <Skills/>
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
      <Modal.Header>Add {code}</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
           {display}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} className={"primary-color"}>
            Save <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default MODALINFO