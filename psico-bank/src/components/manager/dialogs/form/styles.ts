import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
	display: flex;
	padding-top: 2rem;
	padding-bottom: 2rem;
	justify-content: space-between;
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
`;

export const Subtitle = styled.h2`
	font-size: 20px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
	margin-top: 1.25rem;
	margin-bottom: 1.25rem;
`;

export const CloseIcon = styled(IoClose)`
	cursor: pointer;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.neutral[60]};
`;

export const Footer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-top: 2rem;
	padding-bottom: 2rem;
	gap: 2rem;
`;

export const Buttons = styled.div`
	display: flex;
	gap: 1rem;
`;
