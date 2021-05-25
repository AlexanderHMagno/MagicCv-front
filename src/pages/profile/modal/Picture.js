import React, {useState} from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ButtonM from '@material-ui/core/Button';
import Gravatar from 'react-gravatar';
import {gql, useMutation} from '@apollo/client';
import Loader from '../../../util/loader';
import {optionImages} from '../../../util/types';

const ChangePicture = ({children, email, picture_url,setCachePic}) => {
  const [picture, setPicture] = useState({url:picture_url});
  const [open, setOpen] = useState(false)
  const is_upload = ("upload" in picture)
  const USE_MUTATION = is_upload ? UPDATE_PICTURE : BASIC_MUTATION;

  const [experience_changer, {loading}] = useMutation(USE_MUTATION, {
        update(proxy, newData,cache) {
            setOpen(false);
            if (is_upload){
              setCachePic(Math.floor(Math.random() * 500));
            }
        },
        onError(err) {
          console.log(err);
          // err.graphQLErrors[0].extensions.errors;
        },
        variables : {picture_url: picture.upload? picture.file : picture.url}
    });

  function updatePicture ()  {
      experience_changer();
  }

  const PictureLoader = async ({
    target: {
      validity,
      files: [file],
    }}) => {

    // const file = event.target.files[0]
    if (validity.valid) {
      setPicture(
        {
          url:URL.createObjectURL(file),
          file:file,
          upload: true
        })
    }
  }
  
  if (loading) return <Loader/>
  return (
    <Modal
      onClose={() => {setOpen(false);setPicture({url:picture_url})}}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={children}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        {picture ? <Image size='medium' src={picture.url} wrapped /> :
          <Image size='medium'wrapped>
            <Gravatar email={email} size={500} rating="pg" default="identicon" className="CustomAvatar-image"/>
          </Image>
        }
        
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <div className="flex flex-col-reverse">
          
              <div className="mx-auto mt-10">
                <ButtonM
                  variant="contained"
                  color="primary"
                  component="label"
                >
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={PictureLoader}
                    hidden
                  />
                </ButtonM>
              </div>
              <div className="flex">
                {optionImages.map((url,index) => {
                  return <Image as="button" onClick={() => setPicture({url})}key={index} size='tiny' src={url} wrapped />
                })}
               </div>
            </div>
        
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

const UPDATE_PICTURE = gql`
  mutation uploadPicture 
    (
      $picture_url: Upload!
    ) {
      uploadPicture(file: $picture_url) {
        id
        picture_url
      }
    }

`;
export default ChangePicture;