import { BsBellFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled(BsBellFill)`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.primary[40]};
`;

export const Badge = styled.span`
	position: absolute;
	top: -5px;
	right: -5px;
	background-color: ${({ theme }) => theme.colors.feedback.error.medium};
	color: white;
	font-size: 8.95px;
	line-height: 17.89px;
	font-weight: 700;
	border-radius: 50%;
	min-width: 15px;
	height: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Roboto', sans-serif;
`;
