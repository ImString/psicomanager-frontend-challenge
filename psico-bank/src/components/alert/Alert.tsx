import React from 'react';

import { Container, Description, List, ListItem, Title } from './styles';

interface AlertBoxProps {
	title?: string;
	description?: string;
	list?: string[];
	color?: string;
	textColor?: string;
}

export const AlertBox: React.FC<AlertBoxProps> = props => {
	return (
		<Container $backgroundColor={props.color} $textColor={props.textColor}>
			{props.title && <Title>{props.title}</Title>}
			{props.description && <Description>{props.description}</Description>}
			{props.list && props.list.length > 0 && (
				<List>
					{props.list.map((item, index) => (
						<ListItem key={index}>{item}</ListItem>
					))}
				</List>
			)}
		</Container>
	);
};
