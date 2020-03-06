/** @format */

import React from 'react';
import PropTypes from 'prop-types'
// react component for creating beautiful carousel
import Carousel from 'react-slick';

export default function SectionCarousel(props) {

	const {stylePadre, styleCarousel, settings} = props

	const settingsDefault =  !settings ? {
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
	} : settings;

	return (
		<div
			style={!stylePadre ? {
				paddingTop: '15%',
				marginLeft: '-10px',
				marginRight: '-10px',
				color: '#fff'
			} : stylePadre}>
			<Carousel style={ !styleCarousel ? { backgroundColor: 'transparent' } : styleCarousel} {...settingsDefault}>
				{props.children}
			</Carousel>
		</div>
	);
}

SectionCarousel.prototype = {
	stylePadre: PropTypes.object,
	styleCarousel: PropTypes.object,
	settings: PropTypes.object
}
