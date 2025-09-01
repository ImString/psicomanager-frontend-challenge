import React from 'react';

import { Container, List, ListItem, Title } from './styles';

interface AlertBoxProps {
	title: string;
	list: string[];
	color?: string;
}

export const AlertBox: React.FC<AlertBoxProps> = props => {
	return (
		<Container $backgroundColor={props.color}>
			<Title>{props.title}</Title>
			<List>
				{props.list.map((item, index) => (
					<ListItem key={index}>{item}</ListItem>
				))}
			</List>
		</Container>
	);
};
