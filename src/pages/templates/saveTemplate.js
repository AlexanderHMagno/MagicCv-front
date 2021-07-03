import React, { Fragment,useState,useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {GET_TEMPLATE, CREATE_TEMPLATE} from '../../graphql/queries';
import {useMutation} from '@apollo/client';
import {AuthContext} from '../../context/AuthContext';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SaveTemplate =  ({template,image}) => {

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const {user} = useContext(AuthContext);

    let Blob;

    image.then((blo)=> {
      Blob = new File([blo], "test.pdf",{type:"application/pdf"})

    })

    const updateData =  async () => {
        CREATENEWTEMPLATE();
    }

    const [CREATENEWTEMPLATE, {loading}] = useMutation(CREATE_TEMPLATE, {
      update(cache, result,proxy) {
        
        try {
          // Read what its the cache
            const data = cache.readQuery({query:GET_TEMPLATE, variables: { userId: user.id }});
            const newData = {getTemplates: [...data.getTemplates, result.data.templateCreateMutation ]};
            
            // // // Rewrite the cache adding the last post, that way we dont have to read from the server
            // // // Data must have the same structure;
            cache.writeQuery({query:GET_TEMPLATE, data:newData, variables: { userId:user.id }});

            setOpenSnackBar(true);
        } catch (error) {
          
        }

      },
      onError(err) {
        // console.log(err)
      },
      variables :  {
        title: "Alexander",
        category: "sebas",
        image: Blob,
        config: JSON.stringify(template)},
  });

    return (
        <Fragment>
            <AlertDialog UD ={updateData}>
                <Tooltip title="Save Template">
                    <ScreenShareIcon className="cursor-pointer float-right text-indigo-600"/>
                </Tooltip>
            </AlertDialog>

            <Snackbar open={openSnackBar} autoHideDuration={4000} onClose={() => setOpenSnackBar(false)}>
              <Alert severity="success">
                Your Template has been Saved
              </Alert>
            </Snackbar>
        </Fragment>
    )
    
    
    
}


function AlertDialog({children, UD}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
        UD();
        handleClose();
  }

  return (

    <Fragment>
    <span onClick={handleClickOpen}>
        {children}
      </span>
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Would you like to save this template?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Nope
          </Button>
          <Button onClick={handleSave} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </Fragment>
  );
}


export default SaveTemplate;