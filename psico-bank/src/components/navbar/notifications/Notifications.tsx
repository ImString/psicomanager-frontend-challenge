import { addZero } from '@/utils';

import { Badge, Container, Icon } from './styles';

interface NavbarNotificationsProps {
	count: number;
}

export const NavbarNotifications: React.FC<NavbarNotificationsProps> = props => {
	return (
		<Container>
			<Icon />
			{props.count !== undefined && props.count > 0 && <Badge>{addZero(props.count)}</Badge>}
		</Container>
	);
};
