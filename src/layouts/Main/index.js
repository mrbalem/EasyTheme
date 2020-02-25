/** @format */

import React from 'react';
import { Topbar } from './components';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const Main = props => {
	return (
		<div>
			<Topbar
				NavTop={props.NavTop}
				NavCenter={props.NavCenter}
				backgroundImage={props.backgroundImage}
				colorAppBar={props.colorAppBar}
				Navbarcolor={props.Navbarcolor}
				colorNav={props.colorNav}>
				{/* <Carousel data={data} /> */}
				{props.contentPreview}
				{/* {props.children} */}
			</Topbar>
			<br />
			<Container
				style={{
					// position: 'absolute',
					// top: '95%',
					// right: '0%',
					// left: '0%',
					borderRadius: '1em'
				}}
				maxWidth='lg'>
				<Paper style={{ borderRadius: '0.5em' }} elevation={15}>
					<Typography
						component='div'
						style={{
							//backgroundColor: '#cfe8fc',
							height: '100vh',
							width: '100%'
						}}>
						{props.children}
					</Typography>
				</Paper>
			</Container>
		</div>
	);
};

export default Main;
