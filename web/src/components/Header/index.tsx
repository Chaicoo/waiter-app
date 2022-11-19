import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Container, Content } from './StyleHeader';

export function Header() {
	return (
		<Container>
			<Content>
				<div className="pageDetails">
					<h1>Pedidos</h1>
					<h2>Acompanhe os pedidos dos clientes</h2>
				</div>
				<img src={logo} alt="Logo" />
			</Content>
		</Container>
	);
}