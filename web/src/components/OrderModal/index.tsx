import { Overlay, ModalBody, OrderDetails, Actions } from './StyleModal';
import CloseIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

interface IOrderModalProps{
	visible: boolean;
	order: null | Order;
	onClose: () => void;
}

export function OrderModal({visible, order, onClose}: IOrderModalProps) {
	if(!visible || !order){
		return null;
	}

	const total = order.products.reduce((acc, {product, quantity}) => {
		return acc + product.price * quantity;
	}, 0);

	return(
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa {order.table}</strong>
					<button
						type='button'
						onClick={onClose}
					>
						<img src={CloseIcon} alt='Fechar'/>
					</button>
				</header>
				<div className="statusContainer">
					<small>Status do pedido</small>
					<div>
						<span>
							{order.status === 'pending' && '⏱️'}
							{order.status === 'in progress' && '🧑‍🍳'}
							{order.status === 'done' && '✅'}
						</span>
						<strong>
							{order.status === 'pending' && 'Fila de espera'}
							{order.status === 'in progress' && 'Em preparo'}
							{order.status === 'done' && 'Pronto'}
						</strong>
					</div>
				</div>
				<OrderDetails>
					<strong>Itens</strong>

					<div className="orderItems">
						{order.products.map(({_id, product, quantity}) => (
							<div className='item' key={_id}>
								<img
									src={`http://localhost:3001/uploads/${product.imagePath}`}
									alt={product.name}
									width='56'
									height='28'
								/>
								<span className='quantity'>
									{quantity}x
								</span>
								<div className="productDetails">
									<strong>{product.name}</strong>
									<span>{formatCurrency(product.price)}</span>
								</div>
							</div>
						))}
					</div>

					<div className="total">
						<span>Total</span>
						<strong>
							{formatCurrency(total)}
						</strong>
					</div>
				</OrderDetails>

				<Actions>
					<button
						type='button'
						className='primary'
					>
						<span>🧑‍🍳</span>
						<strong>Preparar</strong>
					</button>

					<button
						type='button'
						className='secondary'
					>
						Cancelar pedido
					</button>
				</Actions >
			</ModalBody>
		</Overlay>
	);
}