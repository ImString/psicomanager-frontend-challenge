import { useInterfaceStore } from '@/stores';
import { ReactNode, Suspense, useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import { useNavigationItems } from '@/utils';

export interface RouteManagerRouteProps {
	title?: string;
	hasNavbar?: boolean;
	hasSidebarLeft?: boolean;
	navigationPath?: string[];
	hasSubNavbar?: boolean;
	fallbackClassName?: string;
	fallbackSize?: number;
	children?: ReactNode;
}

export const RouteManagerRoute: React.FC<RouteManagerRouteProps> = (props = {}) => {
	const interfaceContext = useInterfaceStore();

	const location = useLocation();
	const params = useParams();
	const searchParams = useSearchParams();

	useEffect(() => {
		interfaceContext.router.setTitle(props.title || '');
		interfaceContext.router.setHasNavbar(props.hasNavbar || false);
		interfaceContext.router.setHasSidebarLeft(props.hasSidebarLeft || false);
		interfaceContext.router.setNavigationPath(props.navigationPath || []);
	}, [props.title, props.hasNavbar, props.hasSidebarLeft]);

	useEffect(() => {
		interfaceContext.router.setLocation(location);
		interfaceContext.router.setParams(params);
		interfaceContext.router.setSearchParams(searchParams);

		interfaceContext.setNavigationItems(useNavigationItems());
	}, [location.pathname, location.search]);

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
		</>
	);
};
