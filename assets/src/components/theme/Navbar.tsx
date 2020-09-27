import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, CssBaseline, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
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
    }
  }),
);

const Navbar = ({handleClick}: any) => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => handleClick()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Notaría 63
        </Typography>
        <Button variant="text" color="inherit">
          Conferencia
        </Button>
        <Button variant="text" color="inherit">
          Mis cursos
        </Button>
        <Button variant="text" color="inherit">
          Mi cuenta
        </Button>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar
