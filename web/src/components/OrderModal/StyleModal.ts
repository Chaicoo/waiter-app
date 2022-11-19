import styled from 'styled-components';

export const Overlay = styled.div`
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(5px);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalBody = styled.div`
	width: 480px;
	background: #fff;
	border-radius: 8px;
	padding: 32px;

	header{
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong{
			font-size: 24px;
		}

		button{
			line-height: 0;
			border: 0;
			background: transparent;
		}
	}

	.statusContainer{
		margin-top: 32px;

		small{
			font-size: 14px;
			opacity: 0.8;
		}

		div{
			display: flex;
			gap: 8px;
			align-items: center;
			margin-top: 8px;
		}
	}
`;

export const OrderDetails = styled.div`
	margin-top: 32px;

	> strong{
		font-weight: 500;
		font-size: 14px;
		opacity: 0.8;
	}

	.orderItems{
		margin-top: 16px;

		.item{
			display: flex;

			& + .item{
				margin-top: 16px;
			}

			img{
				border-radius: 6px;

			}
		}

		.quantity{
			font-size: 14px;
			color: #666;
			display: block;
			min-width: 20px;
			margin-left: 12px;
		}

		.productDetails{
			margin-left: 4px;

			strong{
				display: block;
				margin-bottom: 4px;
			}

			span{
				font-size: 14px;
				color: #666;
			}
		}
	}

	.total{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 24px;

		span{
			font-weight: 500;
			font-size: 14px;
			opacity: 0.8;
		}
	}
`;

export const Actions = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin-top: 16px;
	gap: 16px;

	.primary{
		background: #333333;
		color: #fff;
		border: 0;
		border-radius: 48px;
		padding: 12px 24px;
		display: flex;
		align-items: center;
		gap: 8px;
		justify-content: center;
	}

	.secondary{
		color: var(--color-primary);
		padding: 12px 24px;
		font-weight: bold;
		border: 1px solid var(--color-primary);
		background: transparent;
		border-radius: 48px;
	}
`;