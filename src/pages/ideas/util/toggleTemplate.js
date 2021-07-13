import React , {useContext, useState} from 'react';
import { useMutation, gql } from '@apollo/client';
import Button from '@material-ui/core/Button';
import {GET_PROFILE, GET_TEMPLATES} from '../../../graphql/queries';
import {AuthContext} from '../../../context/AuthContext';


const ToggleTemplate = ({templateId, userLiked}) => {


        //We need to get the other ideas, susbcribe and unsucbribe to this ideas
    const [inQueue, setInqueueu] = useState(userLiked);
    const {user} = useContext(AuthContext);
    const [toggleTemplateMutation] = useMutation(TOGGLE_TEMPLATE_MUTATION, {
        update(cache, result) {
            
            const TEMPLATECOLLECTION = cache.readQuery({query:GET_PROFILE, variables : {userId:user.id}});        
            const newData = {getProfile: {...TEMPLATECOLLECTION.getProfile, ...result.data.toggleTemplate }};
            cache.writeQuery({query:GET_PROFILE, data:newData, variables: { userId:user.id }});
            
            setInqueueu(!inQueue);
        },
        onError(err) {
            console.log(err)
        },
        variables : {templateId},
        refetchQueries : () => [{
            query:GET_TEMPLATES, variables : {userId:user.id}
        }]
    });


return (
    <Button onClick={toggleTemplateMutation} variant="contained" color={inQueue? 'secondary':'default'}>
        {inQueue ? 'Remove':'Add'}
    </Button> 
)
}


export default ToggleTemplate;

const TOGGLE_TEMPLATE_MUTATION = gql`
mutation toggleTemplate($templateId: ID!){ 
    toggleTemplate (templateId: $templateId) {
        templates
     }
}
`;