import { styles } from './styles';

interface ContainerContentProps {
	children?: React.ReactNode;
}

export const ContainerContent: React.FC<ContainerContentProps> = props => {
	return <div className={styles.container}>{props.children}</div>;
};
