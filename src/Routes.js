/** @format */

import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

const Routes = props => {
	return (
		<BrowserRouter>
			<Switch>
				{props.routes.map((ele, index) => (
					<Route
						exact
						key={index}
						path={ele.href}
						render={() => ele.component}
					/>
				))}

				<Redirect to='/not-found' />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
