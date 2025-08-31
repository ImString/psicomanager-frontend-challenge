import { useInterfaceStore } from '@/stores';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { NavigationTab } from '@/utils';

import {
	SidebarWrapper,
	SidebarContent,
	SidebarContainer,
	SidebarInner,
	Nav,
	NavItem,
	Label,
	NavItemWrapper
} from './styles';

interface SidebarItemProps {
	item: NavigationTab;
}

const SidebarItem: React.FC<SidebarItemProps> = props => {
	const location = useLocation();
	const isActive = useMemo(() => props.item.url === location.pathname, [props.item, location]);

	return (
		<NavItemWrapper key={props.item.name} id={`menu-item-${props.item.name}`}>
			<NavItem to={props.item.url} $active={isActive}>
				<props.item.icon aria-hidden="true" />
				<Label>{props.item.name}</Label>
			</NavItem>
		</NavItemWrapper>
	);
};

export const SidebarLeft: React.FC = () => {
	const interfaceStore = useInterfaceStore();

	return (
		<SidebarWrapper>
			<SidebarContainer>
				<SidebarInner>
					<SidebarContent>
						<Nav aria-label="Sidebar">
							{interfaceStore.navigationItems.map(item => (
								<SidebarItem key={item.id} item={item} />
							))}
						</Nav>
					</SidebarContent>
				</SidebarInner>
			</SidebarContainer>
		</SidebarWrapper>
	);
};
