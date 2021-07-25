import React , {useContext, useState, useEffect} from 'react';
import { useMutation, gql } from '@apollo/client';
import Button from '@material-ui/core/Button';
import {GET_PROFILE, GET_TEMPLATES} from '../../../graphql/queries';
import {AuthContext} from '../../../context/AuthContext';
import StripePayment from './stripePayment';
import {Link} from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


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
            // console.log(err)
        },
        variables : {templateId},
        refetchQueries : () => [{
            query:GET_TEMPLATES, variables : {userId:user.id}
        }]
    });


return (
    <>
        <DisplayMessage paid={toggleTemplateMutation}/>
        
        { (inQueue )  ?
            <Button component={Link}  to={`/templates`} variant="contained" color="default">
                Go to Editor
            </Button>
            :
            <StripePayment templateId={templateId}></StripePayment>
        }
        
        
    </>

)
}


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Message = (({ option, paid }) => {

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [message, setMessage] = useState(""); 
    const [alert, setAlert] = useState("");

    useEffect (() => {
        switch (option) {
            case "success":
                setOpenSnackBar(true);    
                setMessage("Order Completed! Thank you for your purchase!");
                setAlert("success");
                paid();
                
                break;
            case "canceled":
                setOpenSnackBar(true);
                setMessage("Opps -- The transaction could not be completed continue shopping around and checkout when you're ready.");
                setAlert("error")
                
                break;
        
            default:
                break;
        }
    } , [option,paid])
  


    return (
        <Snackbar open={openSnackBar} autoHideDuration={4000} onClose={() => setOpenSnackBar(false)}>
            <Alert severity={alert}>
                {message}
            </Alert>
        </Snackbar>

    )
});

  
function DisplayMessage ({paid}) {
    const [option, setoption] = useState("");
  
    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
  
      if (query.get("success")) {
        setoption("success");
      }
  
      if (query.get("canceled")) {
        setoption("canceled");
      }
    }, []);
  
    return <Message option={option} paid={paid} />
  }







export default ToggleTemplate;

const TOGGLE_TEMPLATE_MUTATION = gql`
mutation toggleTemplate($templateId: ID!){ 
    toggleTemplate (templateId: $templateId) {
        templates
     }
}
`;