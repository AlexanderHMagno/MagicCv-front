import React, {useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Gravatar from 'react-gravatar';
import {gql, useMutation} from '@apollo/client';
import Loader from '../../../util/loader';

import {optionImages} from '../../../util/types';

const ChangePicture = ({children, email, picture_url}) => {
  const [picture, setPicture] = useState(picture_url);
  const [open, setOpen] = useState(false)

  const [experience_changer, {loading}] = useMutation(BASIC_MUTATION, {
        update(proxy, newData) {
          setOpen(false);
        },
        onError(err) {
          console.log(err);
          // err.graphQLErrors[0].extensions.errors;
        },
        variables :  {picture_url:picture}
    });

    function updatePicture ()  {
        experience_changer();
    }
  
  if (loading) return <Loader/>
  return (
    <Modal
      onClose={() => {setOpen(false);setPicture(picture_url)}}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={children}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        {picture ? <Image size='medium' src={picture} wrapped /> :
          <Image size='medium'wrapped>
            <Gravatar email={email} size={500} rating="pg" default="identicon" className="CustomAvatar-image"/>
          </Image>
        }
        
        <Modal.Description>
          <Header>Default Profile Image</Header>

          {optionImages.map((url,index) => {
            return <Image as="button" onClick={() => setPicture(url)}key={index} size='tiny' src={url} wrapped />
          })}
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
          onClick={() => updatePicture()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}



const BASIC_MUTATION = gql`
mutation basicInformation
    (
        $picture_url: String
    )
    { 
        basicInformation (basicInput : {
            picture_url: $picture_url
        }) {
            id
            picture_url
        }
    }
`;
export default ChangePicture;