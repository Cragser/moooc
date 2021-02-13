import React from 'react';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	List,
	makeStyles,
	Theme,
	Typography
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import ClassListItem, { ClassListItemInterface } from './ClassListItem';
const useStyles = makeStyles((theme: Theme) => ({
	heading: {
    fontSize: theme.typography.pxToRem(16),
		fontWeight: theme.typography.fontWeightBold,
  },
}));

interface CourseAccordionInterface {
	title: String,
	classesList: Array<ClassListItemInterface>,
}

const CourseAccordion = ({title, classesList}: CourseAccordionInterface) => {
	const classes = useStyles();
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMore />}
			>
				<Typography variant='h2' className={classes.heading}>{title}</Typography>
		</AccordionSummary>
			<AccordionDetails>
				<List>
					{classesList.map(classItem => (
						<ClassListItem title={classItem.title}/>
					))}
				</List>
			</AccordionDetails>
		</Accordion>
	)
}
export default CourseAccordion