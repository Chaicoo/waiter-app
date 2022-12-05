import { Container } from './StylesHeader';
import { Text } from '../Text';

export const Header = () => {
	return (
		<Container>
			<Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
			<Text size={24} weight="700">
				WAITER
				<Text size={24}>APP</Text>
			</Text>
		</Container>
	);
};
