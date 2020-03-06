/** @format */

import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

//componets core
import Carousel from '../../components/Carousel';
import styles from '../../assets/jss/typographyStyle';

const useStyles = makeStyles({
	root: {
		padding: '3em'
	},
	media: {
		height: 350,
		marginRight: "-10%",
		marginLeft: "-10%"
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
			<div style={{padding: "1em", }} >

				<div style={{padding: "1em", textAlign: "center", width: "400px"}}>
				<Paper elevation={12} > 
			<CardMedia
          className={classes.media}
          image="https://firebasestorage.googleapis.com/v0/b/nevado-store.appspot.com/o/catalogo_300x200%2FZAPA%201_Mesa%20de%20trabajo%201.png?alt=media&token=48b11720-215a-434a-bdaa-c24e58792d89"
          title="Contemplative Reptile"
        />
		</Paper>
		<div className={classes.title}>
				<h3>Cucci</h3>
			</div>
			<p>The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.</p>
			<div>
				<div>
					
				</div>
			</div>
		</div>
				<Carousel settings={{dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1}} stylePadre={{background: "#fff", padding: "3em", border: "none"}}>
						<div>
								<div style={{background: "blue"}}>

								</div>
						</div>
						<div>
						<div style={{background: "blue"}}>
2
								</div>
						</div>
				</Carousel>
			</div>
		</div>
	);
};







export default Home;
