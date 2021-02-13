import React from 'react';
import {
	Container,
	Grid,
	makeStyles,
	Paper,
	Theme
} from '@material-ui/core';
import CoursesList from '../modules/CoursesList';
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
const CoursesPage = () => {
	const classes = useStyles();

	return (
		<Container maxWidth={false} >
		<Grid container className={classes.root} spacing={2} >
				<Grid item md={1} sm={2} xs={2}>
				</Grid>
				<Grid item md={10} xs={12}>
					<CoursesList/>
				</Grid>
		</Grid>
	</Container>
	)
}
export default CoursesPage