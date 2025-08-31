import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteManagerRoute } from '@/components/router-manager';

const HomePage = lazy(() => import('@/pages/home').then(module => ({ default: module.HomePage })));
const ComponentsPage = lazy(() => import('@/pages/components').then(module => ({ default: module.ComponentsPage })));

export const HomeRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<RouteManagerRoute title="Inicio" hasNavbar hasSidebarLeft>
						<HomePage />
					</RouteManagerRoute>
				}
			/>
			<Route path="/components" element={<ComponentsPage />} />
		</Routes>
	);
};
