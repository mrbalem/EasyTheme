/** @format */

import React from 'react';
import { Topbar } from './components';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

//ejemplo container up
// position: 'absolute',
// top: '95%',
// right: '0%',
// left: '0%',

const Main = props => {
	return (
		<div>
			<Topbar
				NavCenter={props.NavCenter}
				NavTop={props.NavTop}
				brand={props.brand}
				backgroundImage={props.backgroundImage}
				colorAppBar={props.colorAppBar}
				Navbarcolor={props.Navbarcolor}
				colorNav={props.colorNav}>
				{props.contentPreview}
			</Topbar>
			<br />
			<Container style={props.style} maxWidth='lg'>
				<Paper style={{ borderRadius: '0.8em' }} elevation={20}>
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
