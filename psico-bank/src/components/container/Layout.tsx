import { ContainerContent } from './Content';

interface ContainerLayoutProps {
	children?: React.ReactNode;
}

export const ContainerLayout: React.FC<ContainerLayoutProps> = props => {
	return (
		<div>
			<ContainerContent>{props.children}</ContainerContent>
		</div>
	);
};
