import React, {useState} from 'react';
import {Button, Popup, Confirm} from 'semantic-ui-react';
import {gql, useMutation} from '@apollo/client';


const DeleteOption = ({info, code, closeModal}) => {

    const [Confimated, setConfirmated] = useState(false);
    const [DeleteCode] = useMutation(DELETE_MUTATION, {
        update (cache){
            closeModal(false);
        } ,
        onError (e) {
            console.log({e});
        },
        variables : {
            typeDelete:code,
            id: info.id
        }
    })

    const DeleteProcess = () => {
        DeleteCode();
        setConfirmated(false);
    }

    return (
        <>
        <Popup
            inverted
            position ="bottom center"
            content = {`Delete ${code}`}
            trigger={ <Button onClick={()=> setConfirmated(true) } floated="right" icon="trash alternate"  color="red" inverted circular size="tiny"/>}
        />

        <Confirm
        header= {`Remove ${code}`}
        open={Confimated}
        onCancel={() => setConfirmated(false)}
        onConfirm={()=> DeleteProcess()}
        size='mini'
        />
        </>
        
    )

}


const DELETE_MUTATION = gql`
    mutation deleteOption($typeDelete:String!, $id:ID!) {
        deleteOption(typeDelete:$typeDelete, id:$id){
            id
            experience {
                id
            }
            education {
                id
            }
            volunteer {
                id
            }
            skills {
                id
            }
        }
    }
`;


export default DeleteOption;