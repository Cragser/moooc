import React from 'react';
import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	makeStyles,
	Theme,
	Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Share, Favorite, MoreVert} from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) => ({
	root: {
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

interface User{
	avatar: string
}

export interface  CourseReleaseInterface {
	user: any,
	title: string,
	releaseDate: string,
	image: string,
	description: string
}

const CourseRelease = ({user, title, releaseDate, image, description}: CourseReleaseInterface) => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
		<CardHeader
			avatar={
				<Avatar aria-label="recipe" className={classes.avatar}>
					{user.avatar}
				</Avatar>
			}
			action={
				<IconButton aria-label="settings">
					<MoreVert />
				</IconButton>
			}
			title={title}
			subheader={releaseDate}
		/>
		<CardMedia
			className={classes.media}
			image={image}
			title={title}
		/>
		<CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
				{description}
			</Typography>
		</CardContent>
		{/* <CardActions disableSpacing>
			<IconButton aria-label="add to favorites">
				<Favorite />
			</IconButton>
			<IconButton aria-label="share">
				<Share />
			</IconButton>
		</CardActions> */}
	</Card>
	)
}
export default CourseRelease