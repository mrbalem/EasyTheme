<!-- @format -->

# EasyThem

Creation of a necessary template with basic components such as modal, alert,
forms, contacts, nabvat, progress, etc. fully created.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
react, react-dom, material ui
```

### Installing

A step by step series of examples that tell you how to get a development env
running

```
npm install
```

```
npm start
```

## File Structure

Within the download you'll find the following directories and files:

```
easyThem
.
├── README.md
├── jsconfig.json
├── package.-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
|	└── robots.txt
└── src
    ├── App.js
	├── Config.js
	├── Routes.js
	├── index.js
    ├── assets
    │    └── jss
	|		 ├── buttonStyle.js
	|		 ├── cardBodyStyle.js
	|		 ├──	cardFooterStyle.js
	|		 ├── cardHeaderStyle.js
	|		 ├── cardStyle.js
	|		 ├──	carouselStyle.js
	|		 ├── customDropdownStyle.js
	|		 ├── material-kird.js
	|		 └── tooltipsStyle.js
	|
    ├── components
    │   ├── Alert
    │   │   └── index.js.js
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   └── CardHeader.js
    │   ├── Carousel
	|	|	├── Example.js
    │   │   └── index.js
    │   ├── Footer
    │   │   └── index.js
    │   ├── Grid
	|	|	├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Modal
    │   │   └── index.js
    │   ├── Progress
    │   │   └── index.js
    │   ├── SocialMedia
    │   │   └── index.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   └── HeaderLinks.js
    │   ├── InfoArea
    │   │   └── InfoArea.js
    │   ├── NavPills
    │   │   └── NavPills.js
    │   ├── Pagination
    │   │   └── Pagination.js
    │   ├── Parallax
    │   │   └── Parallax.js
    │   ├── Snackbar
    │   │   └── SnackbarContent.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Small.js
    │       ├── Success.js
    │       └── Warning.js
    └── views
        ├── LandingPage
        │   ├── LandingPage.js
        │   └── Sections
        │       ├── ProductSection.js
        │       ├── TeamSection.js
        │       └── WorkSection.js
        ├── LoginPage
        │   └── LoginPage.js
        └── ProfilePage
            └── ProfilePage.js
```

### Give an example in Config.js

```js
/** @format */
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import SectionCarousel from './components/Carousel/';
import { Apps } from '@material-ui/icons';
import { Main } from './layouts';

const configData = {
	backgorund:
		'https://demos.creative-tim.com/material-kit-pro-react/static/media/clark-street-merc.4e443266.jpg'
};

// Data carrousel example
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
		display: 'block',
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

// button nav top
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

// button nav center
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
/**
 *  @brand for logo or name of aplication
 *  @contentPreview is necesarie for content view title or  personalized component
 *  @NavTop is necesarie for nav top navigation, recivied a array object
 *  @NavCenter is necesarie for nav center navigation, recivied a array object
 *  @colorAppBar background color appbar conten color @supported :  primary, dark, white,info, succes, warning, danger, transparent, rose
 *  @colorNav bakground color @NavCenter cotent @supported
 *  @Navbarcolor background color @NavTop content @supported
 *  @backgroundImage for @Main
 *  @Main recivied component child for content ...
 *  @RouteList is a object fro the router [{},{},{},{}]
 */

const RouterList = [
	{
		href: '/',
		component: (
			<Main
				brand='Nevado store'
				contentPreview={<SectionCarousel data={dataCarousel} />}
				NavCenter={buttonNav2}
				NavTop={buttonNav}
				colorAppBar='transparent'
				colorNav='transparent'
				Navbarcolor='transparent'
				backgroundImage={configData.backgorund}>
				<div>esto es una prueba</div>
			</Main>
		)
	}
];

export { RouterList };
```

![eccomers example](https://firebasestorage.googleapis.com/v0/b/fir-mrvalem.appspot.com/o/Captura%20de%20pantalla%20de%202020-02-25%2016-00-49.png?alt=media&token=047bd479-3043-4980-984f-03b9ffafee96)

## Authors

- **Rony cb** - _Mrvalem_ - [mrbalem](https://https://github.com/mrbalem)

See also the list of
[contributors](https://github.com/mrbalem/EasyTheme/contributors) who
participated in this project.

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
