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
import CourseRelease, { CourseReleaseInterface } from '../Components/CourseRelease';

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
const ReleaseList = () => {
  const classes = useStyles();

  const ReleasedCourses: Array<CourseReleaseInterface> = [
    {
      user: { avatar: 'C'}, title: 'Ministerio de salud', releaseDate: 'Septiembre 14, 2020', image: 'https://picsum.photos/400/200', description: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      user: { avatar: 'D'}, title: 'Logistica Inimaginable', releaseDate: 'Agosto 11, 2020', image: 'https://picsum.photos/400/200', description: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      user: { avatar: 'Q'}, title: 'Altruismo déspota', releaseDate: 'Junio 13, 2020', image: 'https://picsum.photos/400/200', description: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
  ]


	return (
		<div>
			<Typography variant="h4">Últimos lanzamientos</Typography>
      {ReleasedCourses.map(course => (
        <CourseRelease {...course}/>
      ))}
		</div>
	)
}
export default ReleaseList