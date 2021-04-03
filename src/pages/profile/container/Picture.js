import React, {useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ChangePicture = ({trigger}) => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            Options
          </p>
          <p>Rounder</p>
          <p>Square</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ChangePicture;