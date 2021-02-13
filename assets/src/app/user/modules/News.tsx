import React from 'react';
import {
	makeStyles,
	Paper,
	Theme,
	Typography
} from '@material-ui/core';
import {
	Timeline,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent
 } from '@material-ui/lab';
import { Fastfood } from '@material-ui/icons';
import NewItem, { NewItemInterface } from '../Components/NewItem';
const useStyles = makeStyles((theme: Theme) => ({
	timeline: {
		margin: 0,
		padding: 0
	},
	lineItem: {
		'&::before': {
			display: 'none'
		}
	},
	lineContent: {
		paddingTop: '4px',
		paddingBottom: '4px',
		paddingLeft: '6px',
		paddingRight: '6px'
	},
	paper: {
		margin: 0,
		padding: '0.25rem'
	}
}));
const News = () => {
	const classes = useStyles();
	const Nextactions: Array<NewItemInterface> = [
		{title: 'Acciones', schedule: '9:30', lecturer: 'Dr. Samuel Ramirez'},
		{title: 'Retenciones', schedule: '12:30', lecturer: 'Dra. Isabel Martinez'},
		{title: 'Variaciones', schedule: '15:30', lecturer: 'Dr. Alberto Isasaga'},
	]

	return (
		<div>
		<Typography variant="h6"> Conferencia </Typography>
		<Timeline className={classes.timeline}>
			{Nextactions.map(action => (
				<NewItem {...action}/>
			))}
		</Timeline>
		</div>
	)
}
export default News