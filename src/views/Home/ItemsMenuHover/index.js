/** @format */

import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

const ItemsMenuHover = () => {
	return (
		<div>
			{props.data.map((ele, index) => (
				<GridContainer key={ele + index}>
					<GridItem></GridItem>
				</GridContainer>
			))}
		</div>
	);
};

const ItemsMenuhoverMovil = () => {
	return <div></div>;
};

export default ItemsMenuHover;
