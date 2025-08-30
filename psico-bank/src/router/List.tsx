import { Route, Routes } from 'react-router-dom';

import { HomeRoutes } from './routes/home';

export const RouteList = () => {
	return (
		<Routes>
			<Route path="/*" element={<HomeRoutes />} />
		</Routes>
	);
};
