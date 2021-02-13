import React from 'react';
import {
	makeStyles,
	Paper,
	Theme,
	Typography
} from '@material-ui/core';
import {
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent
 } from '@material-ui/lab';
import { Fastfood } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) => ({
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

export interface NewItemInterface {
	schedule: string,
	lecturer: string,
	title: string
}

const NewItem = ({schedule, lecturer,	title}: NewItemInterface) => {
	const classes = useStyles();
	return (
		<TimelineItem className={classes.lineItem}>
        <TimelineSeparator>
          <TimelineDot>
            <Fastfood />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.lineContent}>
					<Typography variant="body2" color="textSecondary">
            {schedule}
          </Typography>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {lecturer}
            </Typography>
            <Typography>{title}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
	)
}
export default NewItem