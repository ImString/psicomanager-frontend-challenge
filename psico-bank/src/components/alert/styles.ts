import styled from 'styled-components';

export const Container = styled.div<{ $backgroundColor?: string; $textColor?: string }>`
	background-color: ${({ $backgroundColor, theme }) => $backgroundColor || theme.colors.feedback.warning.light};
	border-radius: 8px;
	padding: 16px 20px;
	color: ${({ $textColor, theme }) => $textColor || theme.colors.feedback.warning.dark};
	font-family: Arial, sans-serif;
`;

export const Title = styled.p`
	font-weight: 700;
	margin: 0 0 8px 0;
`;

export const Description = styled.p`
	font-weight: 400;
	margin: 0;
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
