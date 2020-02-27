/** @format */

import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styles from '../../assets/jss/typographyStyle';

const useStyles = makeStyles({
	root: {
		padding: '3em'
	},
	'@media (max-width: 600px)': {
		root: {
			paddingTop: '1em',
			paddingLeft: '15px',
			paddingRight: '15px'
		}
	},
	...styles
});

const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<h1>Últimas ofertas</h1>
			</div>
		</div>
	);
};

export default Home;
