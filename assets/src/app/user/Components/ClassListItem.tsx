import React from 'react';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Theme
} from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) => ({

}));
export interface ClassListItemInterface {
	title: string;
}

const ClassListItem = ({title}:ClassListItemInterface) => {
	const classes = useStyles();
	console.log('should',title)
	return (
		<ListItem>
			<ListItemIcon>
				<VerifiedUser/>
			</ListItemIcon>
			<ListItemText primary={title}/>
		</ListItem>
	)
}
export default ClassListItem