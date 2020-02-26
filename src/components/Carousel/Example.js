/** @format */

import React, { useState, useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';

const Carrousel = props => {
	const [status, setSatus] = useState(true);
	const [index, setIndex] = useState({
		action: 'ascender',
		position: 0
	});

	useEffect(() => {
		setTimeout(() => {
			setSatus(!status);
		}, 3000);

		setTimeout(() => {
			if (props.data.length !== 1) {
				if (index.action === 'ascender') {
					if (index.position + 1 === props.data.length) {
						setIndex({ position: index.position - 1, action: 'descender' });
						return;
					}
					setIndex(prevs => ({ ...prevs, position: index.position + 1 }));
				}
				if (index.action === 'descender') {
					if (index.position === 0) {
						setIndex({ position: index.position + 1, action: 'ascender' });
						return;
					}

					setIndex(prevs => ({ ...prevs, position: index.position - 1 }));
				}
			}
		}, 5000);
	}, [status]);

	return (
		<div
			style={{
				color: '#fff',
				paddingTop: '15%',
				display: 'flex',
				height: '65%'
			}}>
			<Slide in={status} direction='right' timeout={1000}>
				<div
					style={{
						display: 'flex',
						alignContent: 'center',
						paddingLeft: '10%',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '50%'
					}}>
					<h1 style={{ fontSize: '40px' }}>
						{props.data[index.position].titulo}
					</h1>
					<span style={{ fontSize: '25px', textDecoration: 'line-through' }}>
						{props.data[index.position].precio}
					</span>
					<span style={{ fontSize: '25px' }}>
						{props.data[index.position].oferta}
					</span>
					<span>
						<IconButton aria-label='search' color='primary'>
							comprar <ArrowForwardIcon />
						</IconButton>
					</span>
				</div>
			</Slide>
			<Slide in={status} direction='left' timeout={1000}>
				<div
					style={{
						width: '50%',
						backgroundSize: 'cover',
						backgroundImage: `url(${props.data[index.position].img})`
					}}></div>
			</Slide>
		</div>
	);
};

export default Carrousel;
