/**
 * /*eslint-disable
 *
 * @format
 */

import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// core components
import CustomDropdown from '../../CustomDropdown/';
import Button from '../../CustomButtons/';
import styles from './headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();

	const getButton = (object, index) => {
		switch (object.type) {
			case 'custondropdown':
				return (
					<ListItem key={index} className={classes.listItem}>
						<CustomDropdown
							noLiPadding
							buttonText={object.name}
							buttonProps={{
								className: classes.navLink,
								color: object.color
							}}
							buttonIcon={object.icon}
							dropdownList={object.listbuttons}
						/>
					</ListItem>
				);
			case 'button_blank':
				return (
					<ListItem key={index} className={classes.listItem}>
						<Button
							href={object.href}
							color={object.color}
							target='_blank'
							className={classes.navLink}>
							{object.icon} {object.name}
							{/* <CloudDownload className={classes.icons} /> Download */}
						</Button>
					</ListItem>
				);

			case 'button_link':
				return (
					<ListItem key={index} className={classes.listItem}>
						<Link
							to={object.href}
							color={object.color}
							className={classes.navLink}>
							{object.icon} {object.name}
							{/* <CloudDownload className={classes.icons} /> Download */}
						</Link>
					</ListItem>
				);

			case 'button_icon':
				return (
					<ListItem key={index} className={classes.listItem}>
						<Tooltip
							id={object.id}
							title={object.title}
							placement={window.innerWidth > 959 ? 'top' : 'left'}
							classes={{ tooltip: classes.tooltip }}>
							<Button
								href={object.href}
								target='_blank'
								color={object.color}
								className={classes.navLink}>
								{object.icon}
							</Button>
						</Tooltip>
					</ListItem>
				);

			default:
				break;
		}
	};

	return (
		<List className={classes.list}>
			{props.buttonNav.map((element, index) => {
				return getButton(element, index);
			})}
		</List>
	);
}
