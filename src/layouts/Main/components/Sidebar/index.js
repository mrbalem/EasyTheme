/** @format */

import React from 'react';
import { Profile, SidebarNav } from './components';

const Sidebar = () => {
	return (
		<div style={{ background: 'blue' }}>
			<Profile></Profile>
			<SidebarNav />
		</div>
	);
};

export default Sidebar;
