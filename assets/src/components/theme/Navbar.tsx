import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, CssBaseline, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      color: '#FFF'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - 240px)`,
        marginLeft: 240
      }
    },
    link: {
      color: '#FFF'
    }
  }),
);

const Navbar = ({handleClick, full}: any) => {
  const classes = useStyles()
  if(full) {
    classes.appBar = ''
  }
  return (
    <AppBar position="static" className={classes.appBar}  style={{ background: '#003a70', marginBottom: '2rem' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => handleClick()}
        >
          <MenuIcon />
        </IconButton>
        <NavLink to='/dashboard/' className={classes.title} >
          <Typography variant="h6">
              Notaría 63
          </Typography>
        </NavLink>
        <Button variant="text" color="inherit">
            <NavLink to='/dashboard/conference'  className={classes.link}>
                  Conferencia
            </NavLink>
        </Button>
        <NavLink to='/dashboard/courses' className={classes.link}>
          <Button variant="text" color="inherit">
              Cursos
          </Button>
          </NavLink>
        <Button variant="text" color="inherit">
          Mi cuenta
        </Button>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar
