import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100%;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 220px;
	gap: 16px;
	padding: 10px;
	text-align: center;
	position: relative;
	font-family: 'Roboto', sans-serif;
`;

export const CardContentText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RobotImage = styled.img`
	width: 200px;
`;

export const Title = styled.h3`
	font-size: 14px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.neutral[90]};
`;

export const Text = styled.p`
	font-size: 14px;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.neutral[70]};
`;
