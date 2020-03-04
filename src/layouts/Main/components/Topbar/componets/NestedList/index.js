/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
	nested: {
		paddingLeft: theme.spacing(4)
	},
	nested2: {
		paddingLeft: theme.spacing(6)
	}
}));

const NestedList = props => {
	const classes = useStyles();
	const [open, setOpen] = React.useState({});

	const prueba = [
		{
			name: 'Hombre',
			key: 'hombre',
			href: '/hombre',
			icons: StarBorder,
			itents: [
				{
					name: 'calzado',
					key: 'calzado-hombre',
					href: '/hombre/calzados',
					icons: StarBorder,
					itents: [
						{
							name: 'running',
							href: '/hombre/calzado/runnnig',
							icons: StarBorder
						},
						{
							name: 'escarping',
							href: '/hombre/calzado/escraping',
							icons: StarBorder
						}
					]
				},

				{
					name: 'Indumentaria',
					key: 'indumentario-hombre',
					href: '/hombre/indumentaria',
					icons: StarBorder,
					itents: [
						{
							name: 'running',
							href: '/hombre/calzado/runnnig',
							icons: StarBorder
						}
					]
				}
			]
		},
		{
			name: 'Mujer',
			href: '/mujer',
			key: 'mujer',
			icons: StarBorder,
			itents: [
				{
					name: 'calzado',
					key: 'calzado-mujer',
					href: '/mujer/calzados',
					icons: StarBorder,
					itents: [
						{
							name: 'running',
							href: '/mujer/calzado/runnnig',
							icons: StarBorder
						},
						{
							name: 'escarping',
							href: '/hombre/calzado/escraping',
							icons: StarBorder
						}
					]
				},
				{
					name: 'Indumentaria',
					key: 'indumentario-mujer',
					href: '/mujer/indumentaria',
					icons: StarBorder,
					itents: [
						{
							name: 'running',
							href: '/mujer/calzado/runnnig',
							icons: StarBorder
						}
					]
				}
			]
		}
	];

	return (
		<List
			component='nav'
			aria-labelledby='nested-list-subheader'
			subheader={
				<ListSubheader component='div' id='nested-list-subheader'>
					Nevado Store
				</ListSubheader>
			}
			className={classes.root}>
			{prueba.map((ele, index) => {
				if (!open[ele.key]) {
					open[ele.key] = false;
				}
				return (
					<div key={ele + '-' + index}>
						<ListItem button>
							<ListItemIcon>
								<ele.icons />
							</ListItemIcon>
							<ListItemText primary={ele.name} />
							{open[ele.key] ? (
								<ExpandLess
									onClick={() =>
										setOpen(prevent => ({
											...prevent,
											[ele.key]: false
										}))
									}
								/>
							) : (
								<ExpandMore
									onClick={() =>
										setOpen(prevent => ({ ...prevent, [ele.key]: true }))
									}
								/>
							)}
						</ListItem>
						<Collapse in={open[ele.key]} timeout='auto' unmountOnExit>
							<List component='div' disablePadding>
								{ele.itents.map((ele, index) => {
									if (!open[ele.key]) {
										open[ele.key] = false;
									}
									return (
										<div key={ele + '-' + index}>
											<ListItem button className={classes.nested}>
												<ListItemIcon>
													<ele.icons />
												</ListItemIcon>
												<ListItemText primary={ele.name} />
												{open[ele.key] ? (
													<ExpandLess
														onClick={() =>
															setOpen(prevent => ({
																...prevent,
																[ele.key]: false
															}))
														}
													/>
												) : (
													<ExpandMore
														onClick={() =>
															setOpen(prevent => ({
																...prevent,
																[ele.key]: true
															}))
														}
													/>
												)}
											</ListItem>
											<Collapse in={open[ele.key]} timeout='auto' unmountOnExit>
												<List component='div' disablePadding>
													{ele.itents.map((ele, index) => (
														<ListItem
															key={index}
															button
															className={classes.nested2}>
															<ListItemIcon>
																<ele.icons />
															</ListItemIcon>
															<ListItemText primary={ele.name} />
														</ListItem>
													))}
												</List>
											</Collapse>
										</div>
									);
								})}
							</List>
						</Collapse>
					</div>
				);
			})}
		</List>
	);
};

export default NestedList;
