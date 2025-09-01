import { useState } from 'react';

import { Button } from '@/components/button';
import { ManagerFormDialog } from '@/components/manager';

import { Card, CardContentText, Container, RobotImage, Text, Title } from './styles';

export const FinancialPage: React.FC = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<>
			<Container>
				<Card>
					<RobotImage src="/robot.png" alt="Robô" />
					<CardContentText>
						<Title>Olá!</Title>
						<Text>Clique no botão para começar a usar os benefícios financeiros do PsicoManager!</Text>
						<Button label="Ativar o PsicoBank" onClick={() => setModalIsOpen(true)} />
					</CardContentText>
				</Card>
			</Container>
			<ManagerFormDialog isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
		</>
	);
};
