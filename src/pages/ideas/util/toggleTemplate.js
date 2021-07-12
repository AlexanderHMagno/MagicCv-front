import React from 'react';
import { useMutation, gql } from '@apollo/client';
import Button from '@material-ui/core/Button';

const ToggleTemplate = ({templateId, userLiked}) => {


        //We need to get the other ideas, susbcribe and unsucbribe to this ideas

    // const [toggleTemplateMutation] = useMutation(TOGGLE_TEMPLATE_MUTATION, {
    //     update(proxy, newData) {
    //        console.log(newData);
    //     },
    //     onError(err) {
    //         console.log(err)
    //         // setErrors(err.graphQLErrors[0].extensions.errors);
    //     },
    //     variables : {templateid}
    // });

    const toggleTemplate = () => {
        console.log( templateId);
        // toggleTemplateMutation();
    }

return (
    <Button onClick={toggleTemplate} variant="contained" color={userLiked? 'secondary':'default'}>
        {userLiked ? 'Remove':'Add'}
    </Button> 
)
}


export default ToggleTemplate;

const TOGGLE_TEMPLATE_MUTATION = gql`
mutation toggleTemplate
    (
        $templateId: ID,
    )
    { toggleTemplate (
        templateId: $templateId
    )}{
        templates
    }
`