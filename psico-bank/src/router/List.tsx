import { Route, Routes } from 'react-router-dom';

import { RouteManager } from '@/components/router-manager';

import { HomeRoutes } from './routes/home';

export const RouteList = () => {
	return (
		<RouteManager>
			<Routes>
				<Route path="/*" element={<HomeRoutes />} />
			</Routes>
		</RouteManager>
	);
};
