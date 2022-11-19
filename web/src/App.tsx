import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header/index';
import { Orders } from './components/Orders';

export function App() {
	return (
		<React.Fragment>
			<GlobalStyles />
			<Header />
			<Orders />
		</ React.Fragment>
	);
}
