import styled from 'styled-components';

export const Container = styled.div<{ $backgroundColor?: string }>`
	background-color: ${({ $backgroundColor, theme }) => $backgroundColor || theme.colors.feedback.warning.light};
	border-radius: 8px;
	padding: 16px 20px;
	color: ${({ theme }) => theme.colors.feedback.warning.dark};
	font-family: Arial, sans-serif;
`;

export const Title = styled.p`
	font-weight: bold;
	margin: 0 0 8px 0;
`;

export const List = styled.ul`
	margin: 0;
	padding-left: 20px;
`;

export const ListItem = styled.li`
	margin-bottom: 6px;
	line-height: 1.4;
	list-style-type: disc;
`;
