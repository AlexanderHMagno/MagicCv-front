import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import BlurOnSharpIcon from '@material-ui/icons/BlurOnSharp';
import {Image} from 'semantic-ui-react';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  logo : {
      padding: 10
  },
  BackdropProps: {
    background: 'transparent'
  }
});

export default function TemporaryDrawer({children}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >   
        <Image className={classes.logo} size="tiny" src='/images/cv.png' wrapped ui={true} />
     <Divider/>
      <List>
        {children}
      </List>
    </div>
  );


  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{marginTop:20}} variant="contained" color="primary" onClick={toggleDrawer(anchor, true)}><BlurOnSharpIcon fontSize="large"/> Options</Button>
          <Drawer 
          ModalProps={{
            BackdropProps:{
              classes:{
                root:classes.BackdropProps
              }
            }
          }}
          
          anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
