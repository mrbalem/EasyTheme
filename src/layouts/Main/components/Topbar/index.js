/** @format */
import React from 'react';

// import material core component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import {
	primaryColor,
	infoColor,
	successColor,
	warningColor,
	dangerColor,
	roseColor
} from '../../../../assets/jss/material-kird';

// component core
import { Nav, Navbar } from './componets/';

//component hooks

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		//padding: '1em',
		border: 0,
		height: '100vh',
		margin: 0,
		backgroundSize: 'cover'
		//width: '80%'
	},
	containt: {
		backgroundSize: 'cover',
		padding: '1em',
		height: '95.5vh'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	icons: {
		width: '20px',
		height: '20px',
		marginRight: '3px'
	},
	toolbar: {
		width: '95%',
		minHeight: 128,
		alignItems: 'flex-start',
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignSelf: 'flex-end'
	},
	dropdownLink: {
		'&,&:hover,&:focus': {
			color: 'inherit',
			textDecoration: 'none',
			display: 'block',
			padding: '10px 20px'
		}
	},
	socialIcons: {
		position: 'relative',
		fontSize: '20px !important',
		marginRight: '4px'
	}
}));

export default function Topbar(props) {
	//const { ...rest } = props;
	const classes = useStyles();
	const whidth = window.screen.width;

	const backgroundColor = {
		primary: {
			backgroundColor: primaryColor,
			color: '#FFFFFF',
			boxShadow:
				'0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)'
		},
		info: {
			backgroundColor: infoColor,
			color: '#FFFFFF',
			boxShadow:
				'0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)'
		},
		success: {
			backgroundColor: successColor,
			color: '#FFFFFF',
			boxShadow:
				'0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)'
		},
		warning: {
			backgroundColor: warningColor,
			color: '#FFFFFF',
			boxShadow:
				'0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)'
		},
		danger: {
			backgroundColor: dangerColor,
			color: '#FFFFFF',
			boxShadow:
				'0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)'
		},
		rose: {
			backgroundColor: roseColor,
			color: '#FFFFFF',
			boxShadow:
				'0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)'
		},
		transparent: {
			backgroundColor: 'transparent',
			boxShadow: 'none',
			paddingTop: '25px',
			color: '#FFFFFF'
		},
		dark: {
			color: '#FFFFFF',
			backgroundColor: '#212121 ',
			boxShadow:
				'0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)'
		},
		white: {
			border: '0',
			padding: '0.625rem 0',
			marginBottom: '20px',
			color: '#555',
			backgroundColor: '#fff ',
			boxShadow:
				'0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)'
		}
	};

	const background = backgroundColor[props.colorAppBar];
	const backgroundNav = backgroundColor[props.colorNav];
	return (
		<div
			className={classes.root}
			style={{
				backgroundImage: `url(${props.backgroundImage})`
			}}>
			<div
				className={classes.containt}
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.7)'
				}}>
				<AppBar style={background}>
					<Toolbar className={classes.toolbar}>
						{whidth > 500 ? (
							<div style={backgroundNav} className={classes.title}>
								<Nav buttonNav={props.NavTop} />
							</div>
						) : null}

						<Navbar
							brand='Nevado Store'
							rightLinks={<Nav buttonNav={props.NavCenter} />}
							fixed
							color={props.Navbarcolor}
							changeColorOnScroll={{
								height: whidth > 500 ? 400 : 200,
								color:
									props.Navbarcolor == 'transparent'
										? 'dark'
										: props.Navbarcolor
							}}
						/>
					</Toolbar>
				</AppBar>
				{props.children}
			</div>
		</div>
	);
}
