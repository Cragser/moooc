import React from 'react';
import {
	Container,
	Grid,
	makeStyles,
	Theme
} from '@material-ui/core';
import { zoomApp } from '../modules/Zoom/ZoomInterface';
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		scroll: 'hidden'
	},
	paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const ConferencePage = () => {
	const classes = useStyles();
	// zoomApp()
	return (
		<Container maxWidth={false} >
		<Grid container className={classes.root} spacing={2} >
				<Grid item md={1} sm={2} xs={2}>
				</Grid>
				<Grid item md={10} xs={12}>

				</Grid>
		</Grid>
	</Container>
	)
}
export default ConferencePage