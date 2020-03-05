import {List, ListItem, ListItemText, Divider, makeStyles, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import React from 'react';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export const SideMenu = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };
      
      const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            <ListItem button>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary="Directory">Directory</ListItemText>
            </ListItem>
          </List>
          <Divider />
        </div>
      );

    return(
        <React.Fragment>
            <Button onClick={toggleDrawer('left', true)}><MenuIcon></MenuIcon></Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </React.Fragment>
        
    );
};