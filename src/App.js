/** @format */

import React from 'react';
import { RoutesList } from './Config';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

function App() {
	return (
		<div>
			<Router history={browserHistory}>
				<Routes routes={RoutesList} />
			</Router>
		</div>
	);
}

export default App;
