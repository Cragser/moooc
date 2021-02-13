import React from 'react';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	IconButton,
	makeStyles,
	Theme,
	Typography
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import PageCourseItem, { PageCourseItemInterface } from '../Components/Course/PageCourseItem';
const useStyles = makeStyles((theme: Theme) => ({

}));
const CoursesList = () => {
	const classes = useStyles();
	const courses: Array<PageCourseItemInterface> = [
		{ image: 'https://picsum.photos/400/200', title: 'Increible', teacher: 'Alberto Labastida', price: '300', rating: 5 },
		{ image: 'https://picsum.photos/400/200', title: 'Curso', teacher: 'Mariano Ancianeli', price: '350', rating: 4 },
		{ image: 'https://picsum.photos/400/200', title: 'Description', teacher: 'Miruti Macherano', price: '400', rating: 3 },
	];

	return (
		<Grid container spacing={2}>
			{courses.map((course) => (
				<Grid item md={4} xs={12}>
					<PageCourseItem {...course}/>;
				</Grid>
			))}
		</Grid>

	)
}
export default CoursesList