/** @format */

import React from 'react';

// core component materual ui
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// core components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

// core component
import Carousel from '../../../components/Carousel';

const useStyles = makeStyles({
	media: {
		//width: 300,
		height: 'auto'
	},
	paddingLeft: {
		paddingLeft: '15%',
		paddingTop: '10%'
	},
	'@media (max-width: 600px)': {
		paddingLeft: {
			paddingLeft: '3%',
			paddingTop: '10%'
		}
	}
});

const CarouselHome = props => {
	const classes = useStyles();
	return (
		<Carousel>
			{props.data.map((ele, index) => (
				<div key={index}>
					<GridContainer>
						<GridItem xs={12} sm={6}>
							<div className={classes.paddingLeft}>
								<h1 style={{ fontSize: '40px' }}>{ele.titulo}</h1>
								<span
									style={{
										fontSize: '25px',
										textDecoration: 'line-through'
									}}>
									{ele.precio}
								</span>
								<br />
								<span style={{ fontSize: '25px' }}>{ele.oferta}</span>
								<br />
								<br />
								<span>
									<Button variant='contained' color='primary' component='span'>
										Comprar
										<ArrowForwardIcon style={{ paddingLeft: '0.5em' }} />
									</Button>
								</span>
							</div>
						</GridItem>
						<GridItem xs={12} sm={6}>
							<CardMedia
								className={classes.media}
								component='div'
								title={ele.titulo}>
								<img
									src={ele.img}
									alt={ele.titulo}
									style={{
										width: '100%',
										height: 'auto'
									}}></img>
							</CardMedia>
						</GridItem>
					</GridContainer>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselHome;
