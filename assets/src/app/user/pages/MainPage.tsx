import React from 'react';
import {
	Container,
	Grid,
	Hidden,
	makeStyles,
	Paper,
	Theme
} from '@material-ui/core';
import MyCourses from '../modules/MyCourses';
import ReleaseList from '../modules/ReleaseList';
import News from '../modules/News';

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
const MainPage = () => {
  // const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();
	return (
		<Container maxWidth={false} >
			<Grid container className={classes.root} spacing={2} >
					<Hidden smDown>
						<Grid item sm={3}>
							<Paper
							className={classes.paper}>
								<MyCourses/>
							</Paper>
						</Grid>
					</Hidden>
					<Grid item md={6} sm={8} xs={12}>
						<Paper
							className={classes.paper}>
							<ReleaseList/>
						</Paper>
					</Grid>
					<Hidden xsDown>
						<Grid item md={3} sm={4}>
							<Paper
							className={classes.paper}>
								<News/>
							</Paper>
						</Grid>
					</Hidden>
			</Grid>
		</Container>
	)
}
export default MainPage