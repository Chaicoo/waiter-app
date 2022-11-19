import { Container } from './StyleOrders';
import { OrdersBoard } from '../ordersBoard';
import { Order } from '../../types/Order';

const orders: Order[] = [
	{
		'_id': '6373bbc77a55e60bb7e311a2',
		'table': '2',
		'status': 'pending',
		'products': [
			{
				'product': {
					'name': 'pizza 4 queijos',
					'imagePath': '1668524164023-quatro-queijos.png',
					'price': 35,
				},
				'quantity': 2,
				'_id': '6373bbc77a55e60bb7e311a4'
			},
			{
				'product': {
					'name': 'coca-cola',
					'imagePath': '1668526163698-coca-cola.png',
					'price': 3.5,
				},
				'quantity': 2,
				'_id': '6373bbc77a55e60bb7e311a4'
			}
		],
	},
	{
		'_id': '6373bbc77a55e60bb7e311a2',
		'table': '3',
		'status': 'in progress',
		'products': [
			{
				'product': {
					'name': 'coca-cola',
					'imagePath': '1668526163698-coca-cola.png',
					'price': 3.5,
				},
				'quantity': 2,
				'_id': '6373bbc77a55e60bb7e311a4'
			},
		],
	},
	{
		'_id': '6373bbc77a55e60bb7e311a2',
		'table': '24',
		'status': 'done',
		'products': [
			{
				'product': {
					'name': 'coca-cola',
					'imagePath': '1668526163698-coca-cola.png',
					'price': 3.5,
				},
				'quantity': 2,
				'_id': '6373bbc77a55e60bb7e311a4'
			},
			{
				'product': {
					'name': 'coca-cola',
					'imagePath': '1668526163698-coca-cola.png',
					'price': 3.5,
				},
				'quantity': 2,
				'_id': '6373bbc77a55e60bb7e311a4'
			},
			{
				'product': {
					'name': 'coca-cola',
					'imagePath': '1668526163698-coca-cola.png',
					'price': 3.5,
				},
				'quantity': 2,
				'_id': '6373bbc77a55e60bb7e311a4'
			}
		],
	},
];

export function Orders() {
	return (
		<Container>
			<OrdersBoard
				icon='⏱️'
				title='Fila de espera'
				orders={
					orders.filter((order) => order.status === 'pending')
				}
			/>
			<OrdersBoard
				icon='🧑‍🍳'
				title='Pedidos em preparo'
				orders={
					orders.filter((order) => order.status === 'in progress')
				}
			/>
			<OrdersBoard
				icon='✅'
				title='Pedidos prontos'
				orders={
					orders.filter((order) => order.status === 'done')
				}
			/>
		</Container>
	);
}
