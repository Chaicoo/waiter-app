import styled from 'styled-components';

export const Container = styled.header`
	padding: 1.5rem 2rem;
	background: var(--color-primary);
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	`;

export const Content = styled.div`
	justify-content: space-between;
	width: 100%;
	max-width: 1216px;
	margin: 0 auto;
	display: flex;
	align-items: center;

	.pageDetails{
		h1{
			color: #fff;
			font-size: 2rem;
		}

		h2{
			color: #fff;
			font-weight: 400;
			font-size: 1rem;
			margin-top: 6px;
		}
	}
`;