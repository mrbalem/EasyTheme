/** @format */

import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';

// @material/core
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// @material-ui/icons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// core components

import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';

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

export default function SectionCarousel(props) {
	const classes = useStyles();
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div
			style={{
				paddingTop: '15%',
				marginLeft: '-10px',
				marginRight: '-10px',
				color: '#fff'
			}}>
			<Carousel style={{ backgroundColor: 'transparent' }} {...settings}>
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
										<Button
											variant='contained'
											color='primary'
											component='span'>
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
		</div>
	);
}
