/**
 * /*eslint-disable
 *
 * @format
 */

import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import CustomDropdown from '../../CustomDropdown/';
import Button from '../../CustomButtons/';

import styles from './headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText='Components'
					buttonProps={{
						className: classes.navLink,
						color: 'transparent'
					}}
					buttonIcon={Apps}
					dropdownList={[
						<a href='/' className={classes.dropdownLink}>
							All components
						</a>,
						<a
							href='https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar'
							target='_blank'
							className={classes.dropdownLink}>
							Documentation
						</a>
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href='https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar'
					color='transparent'
					target='_blank'
					className={classes.navLink}>
					<CloudDownload className={classes.icons} /> Download
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				{/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
				<Tooltip
					id='instagram-twitter'
					title='siguenos en twitter'
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						href='https://twitter.com/CreativeTim?ref=creativetim'
						target='_blank'
						color='transparent'
						className={classes.navLink}>
						<i className={classes.socialIcons + ' fab fa-twitter'} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id='instagram-facebook'
					title='siguenos en facebook'
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						color='transparent'
						href='https://www.facebook.com/CreativeTim?ref=creativetim'
						target='_blank'
						className={classes.navLink}>
						<i className={classes.socialIcons + ' fab fa-facebook'} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id='instagram-tooltip'
					title='siguenos en instagran'
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						color='transparent'
						href='https://www.instagram.com/CreativeTimOfficial?ref=creativetim'
						target='_blank'
						className={classes.navLink}>
						<i className={classes.socialIcons + ' fab fa-instagram'} />
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	);
}