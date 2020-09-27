import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'
import { Divider, Drawer } from '@material-ui/core'
import Menu from './Menu'

const makeStyle = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPapper: {
    width: 240
  },
  toolbar: theme.mixins.toolbar,
}))

const AsideMenu = ({ variant, open, onClose}: any) => {
  const classes = makeStyle()
  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPapper
      }}
      variant={variant}
      open={open}
      onClick={onClose ? onClose : null}
      anchor="left"
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <Menu></Menu>
    </Drawer>
  )
}

export default AsideMenu
