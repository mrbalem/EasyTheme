/** @format */
import React from 'react';

// imporot material icons
import SendIcon from '@material-ui/icons/Send';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { Link } from 'react-router-dom';
import { Apps } from '@material-ui/icons';

// core components
import CarouselHome from './views/Home/CarouselHome';
import SectionCarousel from './components/Carousel/';

// core Layout
import { Main } from './layouts';

// core views

import Home from './views/Home';

const configData = {
	backgorund:
		'https://demos.creative-tim.com/material-kit-pro-react/static/media/clark-street-merc.4e443266.jpg'
};

const dataCarousel = [
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

const classes = {
	dropdownLink: {
		color: 'inherit',
		textDecoration: 'none',
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'pre',
		padding: '10px 20px'
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
		href: '/hombre',
		icon: Apps,
		listbuttonsMovil: [
			{
				name: 'calzado',
				key: 'calzado-hombre',
				href: '/hombre/calzados',
				icons: LocalOfferIcon,
				itents: [
					{
						name: 'Trail running',
						href: '/hombre/calzado/trail-rinning',
						icons: LocalOfferIcon
					},
					{
						name: 'Running',
						href: '/hombre/calzado/running',
						icons: LocalOfferIcon
					},
					{
						name: 'Trekking',
						href: '/hombre/calzado/trekking',
						icons: LocalOfferIcon
					},
					{
						name: 'Botas',
						href: '/hombre/calzado/botas',
						icons: LocalOfferIcon
					}
				]
			},
			{
				name: 'Indumentaria',
				key: 'indumentaria-hombre',
				href: '/hombre/indumentaria',
				icons: LocalOfferIcon,
				itents: [
					{
						name: 'Casacas',
						href: '/hombre/indumentaria/casacas',
						icons: LocalOfferIcon
					},
					{
						name: 'Camisas & Polos',
						href: '/hombre/indumentaria/camisas-polos',
						icons: LocalOfferIcon
					}
				]
			},
			{
				name: 'Accesorios',
				key: 'accesorios-hombre',
				href: '/hombre/accesorios/hombre',
				icons: LocalOfferIcon,
				itents: [
					{
						name: 'Running',
						href: '/hombre/accesorios/running',
						icons: LocalOfferIcon
					},
					{
						name: 'Trekking',
						href: '/hombre/accesorios/trekking',
						icons: LocalOfferIcon
					}
				]
			}
		],
		listbuttons: [
			<a style={classes.dropdownLink}>hola</a>,
			<Link to='/#' style={classes.dropdownLink}>
				<SendIcon fontSize='inherit' /> Documentation
			</Link>
		]
	},
	{
		type: 'custondropdown',
		name: 'HOMBRE',
		href: '/#',
		color: 'transparent',
		icon: AccessibilityIcon,
		listbuttons: <div>hola mundo cruel</div>
	},
	{
		type: 'custondropdown',
		color: 'transparent',
		icon: PregnantWomanIcon,
		name: 'Mujer',
		listbuttons: <div>hola mundo cruel</div>
	},
	{
		type: 'custondropdown',
		color: 'transparent',
		icon: ChildCareIcon,
		name: 'Niños',
		listbuttons: <div>hola mundo cruel</div>
	},
	{
		type: 'custondropdown',
		color: 'transparent',
		icon: LocalOfferIcon,
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

const RoutesList = [
	{
		href: '/',
		component: (
			<Main
				brand={
					<img
						width='150'
						height='100'
						src='https://firebasestorage.googleapis.com/v0/b/ink-grid.appspot.com/o/edicion%20de%20nevado-27.png?alt=media&token=f347cf7d-81e5-4dd2-a150-a76ba01d9e6f'></img>
				}
				contentPreview={<CarouselHome data={dataCarousel} />}
				NavCenter={buttonNav2}
				NavTop={buttonNav}
				colorAppBar='transparent'
				colorNav='transparent'
				Navbarcolor='transparent'
				style={{ marginTop: '50px' }}
				backgroundImage={configData.backgorund}>
				<Home />
			</Main>
		)
	}

	// other router list ...
];

export { RoutesList };
