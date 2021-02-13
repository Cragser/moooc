import React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	makeStyles,
	Theme,
	Typography
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
const useStyles = makeStyles((theme: Theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export interface PageCourseItemInterface {
	image: string,
	title: string,
	teacher: string,
	price: string,
	rating: number
}

const PageCourseItem = ({
	image,
	title,
	teacher,
	price,
	rating
}: PageCourseItemInterface) => {
	const classes = useStyles();
	return (
		<Card >
		<CardMedia
		 className={classes.media}
			image={image}
			title={title}
		/>
		<CardContent>
		<Typography variant="h5">
			{title}
		</Typography>
			<Typography variant="subtitle1" color="textSecondary">
				{teacher}
			</Typography>
			<Rating name="half-rating" value={rating} readOnly  />
			<Typography variant="subtitle1" >
				<Box fontWeight="fontWeightBold" m={1}>
					{price} MX$
				</Box>
			</Typography>
		</CardContent>
	</Card>
	)
}
export default PageCourseItem