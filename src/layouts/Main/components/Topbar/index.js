/** @format */
import React, { useState } from 'react';

// import material core component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MoreIcon from '@material-ui/icons/MoreVert';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import { Fade } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Header from './Layout/';
import HeaderLinks from './Layout/headerlinks';

//component hooks

import Carousel from './Carousel';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		padding: '1em',
		backgroundImage:
			"url('https://demos.creative-tim.com/material-kit-react/static/media/bg4.199e9ec1.jpg')",
		border: 0,
		height: '100vh',
		margin: 0,
		backgroundSize: 'cover'
		//width: '80%'
	},
	menuButton: {
		marginRight: theme.spacing(2)
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
	}
}));

export default function Topbar(props) {
	const { ...rest } = props;
	const classes = useStyles();

	const data = [
		{
			titulo: 'Zapatillas Urbanas Rhisien',
			precio: 'S/ 249',
			oferta: 'S/ 229.90 (Oferta)',
			href: '/jdaskdk',
			img:
				'https://firebasestorage.googleapis.com/v0/b/nevado-store.appspot.com/o/catalogo_300x200%2FZAPA%201_Mesa%20de%20trabajo%201.png?alt=media&token=48b11720-215a-434a-bdaa-c24e58792d89'
		},
		{
			titulo: 'Zapatos Casuales Nelsonn',
			precio: 'S/ 229',
			oferta: 'S/ 220.90 (Oferta)',
			href: '/jdaskdk',
			img:
				'https://firebasestorage.googleapis.com/v0/b/nevado-store.appspot.com/o/catalogo_300x200%2FZAPA%202_Mesa%20de%20trabajo%201.png?alt=media&token=b4eed121-cbe8-4f7a-967a-9197be0b7734'
		},
		{
			titulo: 'Zapatos Casuales Jote',
			precio: 'S/ 269',
			oferta: 'S/ 250.90 (Oferta)',
			href: '/jdaskdk',
			img:
				'https://firebasestorage.googleapis.com/v0/b/nevado-store.appspot.com/o/catalogo_300x200%2FZAPA%204_Mesa%20de%20trabajo%201.png?alt=media&token=960ea8c2-4d40-40a2-87d2-31951114463f'
		}
	];

	const whidth = window.screen.width;

	return (
		<div className={classes.root}>
			<AppBar style={{ background: 'transparent' }}>
				<Toolbar className={classes.toolbar}>
					{whidth > 500 ? (
						<div className={classes.title}>
							<HeaderLinks />
						</div>
					) : null}

					<Header
						brand='Nevado Store'
						rightLinks={<HeaderLinks />}
						fixed
						color='transparent'
						changeColorOnScroll={{
							height: 400,
							color: 'dark'
						}}
						{...rest}
					/>
				</Toolbar>
			</AppBar>
			<Carousel data={data} />
		</div>
	);
}
