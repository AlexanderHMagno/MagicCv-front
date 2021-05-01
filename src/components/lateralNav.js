import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BlurOnSharpIcon from '@material-ui/icons/BlurOnSharp';
import {Link} from 'react-router-dom';
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
  }
});

export default function TemporaryDrawer({options}) {
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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >   
        <Image className={classes.logo} size="tiny" src='/images/cv.png' wrapped ui={true} />
     <Divider/>
      <List>
        {options.map((option, index) => (
            <Link to={option.path}  key={option.text} onClick={()=> option.action? option.action() : ""}>
                <ListItem button >
                <ListItemIcon>{<option.icon color="primary"/>}</ListItemIcon>
                <ListItemText primary={option.text} />
                </ListItem>
            </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><BlurOnSharpIcon fontSize="large" color="primary"/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
