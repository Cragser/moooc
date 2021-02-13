import React from 'react';
import {
	makeStyles,
	Theme,
} from '@material-ui/core';
import CourseAccordion from '../Components/CourseAccordion';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
	},
	heading: {
    fontSize: theme.typography.pxToRem(16),
		fontWeight: theme.typography.fontWeightBold,

  },
}));
const MyCourses = () => {
	const classes = useStyles();
	const courses = [
		{
			title: 'Aprendizaje acelerado ',
			classesList: [
				{title: 'Clase uno'},
				{title: 'Clase dos'},
			]
		},
		{
			title: 'Aprendizaje de relleno',
			classesList: [
				{title: 'Clase uno'},
				{title: 'Clase dos'},
			]
		},
		{
			title: 'Aprendizaje de relleno',
			classesList: [
				{title: 'Clase uno'},
				{title: 'Clase dos'},
			]
		},
		{
			title: 'Aprendizaje de relleno',
			classesList: [
				{title: 'Clase uno'},
				{title: 'Clase dos'},
			]
		},
		{
			title: 'Aprendizaje de relleno',
			classesList: [
				{title: 'Clase uno'},
				{title: 'Clase dos'},
			]
		},
	]
	return (
		<div  className={classes.root}>
			{courses.map(course => (
				<CourseAccordion key={course.title} title={course.title} classesList={course.classesList} />
			))}
		</div>
	)
}
export default MyCourses