/** @format */

import React from 'react';
import { Main } from './layouts';
import { Apps, CloudDownload } from '@material-ui/icons';
import StoreIcon from '@material-ui/icons/Store';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { Carousel } from './layouts/Main/components/Topbar/componets/';

function App() {
	let backgorund =
		'https://demos.creative-tim.com/material-kit-pro-react/static/media/clark-street-merc.4e443266.jpg';

	const classes = {
		dropdownLink: {
			color: 'inherit',
			textDecoration: 'none',
			display: 'block',
			padding: '10px 20px'
		},
		dropdownItem: {
			fontSize: '13px',
			padding: '10px 20px',
			margin: '0 5px',
			borderRadius: '2px',
			position: 'relative',
			transition: 'all 150ms linear',
			display: 'block',
			clear: 'both',
			textDecoration: 'none',
			fontWeight: '400',
			height: 'fit-content',
			color: '#333',
			whiteSpace: 'nowrap',
			minHeight: 'unset'
		},
		socialIcons: {
			position: 'relative',
			fontSize: '20px !important',
			marginRight: '4px'
		},
		icons: {
			width: '20px',
			height: '20px',
			marginRight: '3px'
		}
	};

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

	const buttonNav = [
		{
			type: 'button_blank',
			href: '/#',
			color: 'transparent',
			icon: <VpnKeyIcon className={classes.icons} />,
			name: 'Iniciar sesión'
		},
		{
			type: 'button_blank',
			href: '',
			color: 'transparent',
			icon: <LocationOnIcon className={classes.icons} />,
			name: 'Tiendas'
		},
		{
			type: 'button_icon',
			id: 'whatsapp-facebook',
			title: 'Envianos un whatsapp',
			href: 'https://twitter.com/CreativeTim?ref=creativetim',
			color: 'transparent',
			icon: <i className={classes.socialIcons + ' fab fa-whatsapp'} />
		},
		{
			type: 'button_icon',
			id: 'instagram-facebook',
			title: 'siguenos en instagran',
			href: 'https://twitter.com/CreativeTim?ref=creativetim',
			color: 'transparent',
			icon: <i className={classes.socialIcons + ' fab fa-instagram'} />
		},
		{
			type: 'button_icon',
			id: 'instagram-facebook',
			title: 'siguenos en facebook',
			href: 'https://www.facebook.com/CreativeTim?ref=creativetim',
			color: 'transparent',
			icon: <i className={classes.socialIcons + ' fab fa-facebook'} />
		}
	];

	const buttonNav2 = [
		{
			type: 'custondropdown',
			name: 'Componentes',
			color: 'transparent',
			icon: Apps,
			listbuttons: [
				<a href='/' style={classes.dropdownLink}>
					COMPOENNRE
				</a>,
				<a
					href='https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar'
					target='_blank'
					style={classes.dropdownLink}>
					Documentation
				</a>
			]
		},
		{
			type: 'button_blank',
			href: '/#',
			color: 'transparent',
			icon: <AccessibilityIcon className={classes.icons} />,
			name: 'Hombre'
		},
		{
			type: 'button_blank',
			href: '/#',
			color: 'transparent',
			icon: <i className={classes.icons + ' fas fa-female'} />,
			name: 'Mujer'
		},
		{
			type: 'button_blank',
			href: '/#',
			color: 'transparent',
			icon: <i className={classes.icons + ' fas fa-baby'} />,
			name: 'Niños'
		},
		{
			type: 'button_blank',
			href: '/#',
			color: 'transparent',
			icon: <i className={classes.icons + ' fas fa-tag'} />,
			name: 'Promociones'
		},
		{
			type: 'button_blank',
			href: '/#',
			color: 'transparent',
			icon: <i className={classes.icons + ' fas fa-chart-line'} />,
			name: 'Creciendo juntos'
		}
	];
	return (
		<div>
			<Main
				contentPreview={<Carousel data={data} />}
				NavTop={buttonNav2}
				NavCenter={buttonNav}
				colorAppBar='transparent'
				colorNav='transparent'
				Navbarcolor='transparent'
				backgroundImage={backgorund}>
				<div>esto es una prueba</div>
			</Main>
		</div>
	);
}

export default App;
