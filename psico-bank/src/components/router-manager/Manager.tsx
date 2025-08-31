import { useInterfaceStore } from '@/stores';
import { useEffect } from 'react';

import { Navbar } from '../navbar';
import { SidebarLeft } from '../sidebar';
import { ContentWrapper } from './styles';

interface RouteManagerProps {
	children?: React.ReactNode;
}

export const RouteManager: React.FC<RouteManagerProps> = props => {
	const interfaceStore = useInterfaceStore();

	useEffect(() => {
		document.title = `PsicoBank - ${interfaceStore.router.title ? `${interfaceStore.router.title}` : ''}`;
	}, [interfaceStore.router.title]);

	useEffect(() => {
		try {
			const oldLinks = document.querySelectorAll('link[rel="icon"]');

			for (const link of oldLinks) {
				link.remove();
			}
		} catch (error) {}

		let link = document.createElement('link');
		link.rel = 'icon';
		link.href = interfaceStore.favicon.length > 0 ? interfaceStore.favicon : '/favicon.ico';
		document.head.appendChild(link);

		return () => {
			link?.remove?.();
		};
	}, [interfaceStore.favicon]);

	return (
		<>
			{interfaceStore.router.hasNavbar && (
				<>
					<Navbar />
				</>
			)}
			{interfaceStore.router.hasSidebarLeft && (
				<>
					<SidebarLeft />
				</>
			)}

			<ContentWrapper
				$hasNavbar={interfaceStore.router.hasNavbar}
				$hasSidebarLeft={interfaceStore.router.hasSidebarLeft}>
				{props.children}
			</ContentWrapper>
		</>
	);
};
