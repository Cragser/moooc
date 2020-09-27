import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, AppBar, Toolbar, IconButton, Typography, Badge, Drawer, Divider, List, Container, Grid, Paper, Box, Theme, Hidden } from '@material-ui/core';
import Navbar from '../components/theme/Navbar';
import AsideMenu from '../components/theme/AsideMenu';

const useStyle = makeStyles((theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}))
const Dashboard = () => {
  const classes = useStyle()
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div >
      <Navbar handleClick={handleDrawer}></Navbar>
      <Hidden xsDown>
        <AsideMenu variant="permanent" open={true}></AsideMenu>
      </Hidden>
      <Hidden smUp>
        <AsideMenu variant="temporary" open={open} onClose={handleDrawer}></AsideMenu>
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}>Contenido</div>
      </div>
    </div>
  )
}

export default Dashboard
