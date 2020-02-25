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

### Give an example

```js
import React from 'react';

//import core material ui
import { Apps } from '@material-ui/icons';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

// import core proyect
import { Main } from './layouts';
import { Carousel } from './layouts/Main/components/Topbar/componets/';

function App() {
	let backgorund =
		'https://demos.creative-tim.com/material-kit-pro-react/static/media/clark-street-merc.4e443266.jpg';

	// style for icon and <a>
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

	// data for carousel
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

	// buttons nav top
	const buttonNavTop = [
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

	//buttons navbotton
	const buttonNavBotton = [
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
	 *  @contentPreview is necesarie for content view title or  personalized component
	 *  @NavTop is necesarie for nav top navigation, recivied a array object
	 *  @NavCenter is necesarie for nav center navigation, recivied a array object
	 *  @colorAppBar background color appbar conten color @supported :  primary, dark, white,info, succes, warning, danger, transparent, rose
	 *  @colorNav bakground color @NavCenter cotent @supported
	 *  @Navbarcolor background color @NavTop content @supported
	 *  @backgroundImage for @Main
	 *  @Main recivied component child for content ...
	 */
	return (
		<div>
			<Main
				contentPreview={<Carousel data={data} />}
				NavTop={buttonNavTop}
				NavCenter={buttonNavBotton}
				colorAppBar='transparent'
				colorNav='transparent'
				Navbarcolor='transparent'
				backgroundImage={backgorund}>
				<div>my first example content</div>
			</Main>
		</div>
	);
}

export default App;
```

![nombre de la imagen][https://firebasestorage.googleapis.com/v0/b/fir-mrvalem.appspot.com/o/Screen%20record%20from%202020-02-25%2016.16.50.gif?alt=media&token=a6aacc1f-90b8-4f12-af41-df13241158cd]

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
