/** @format */

import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';

export default function SectionCarousel(props) {
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
				{props.children}
			</Carousel>
		</div>
	);
}
