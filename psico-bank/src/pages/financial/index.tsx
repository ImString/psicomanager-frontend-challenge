import { Button } from '@/components/button';

import { Card, CardContentText, Container, RobotImage, Text, Title } from './styles';

export const FinancialPage: React.FC = () => {
	return (
		<Container>
			<Card>
				<RobotImage src="/robot.png" alt="Robô" />
				<CardContentText>
					<Title>Olá!</Title>
					<Text>Clique no botão para começar a usar os benefícios financeiros do PsicoManager!</Text>
					<Button label="Ativar o PsicoBank" />
				</CardContentText>
			</Card>
		</Container>
	);
};
