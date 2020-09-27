import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
const Menu = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <VerifiedUser/>
          </ListItemIcon>
          <ListItemText primary="Mi primer elemento"/>
        </ListItem>
      </List>
    </div>
  )
}

export default Menu
