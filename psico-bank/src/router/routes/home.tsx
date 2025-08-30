import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/home').then(module => ({ default: module.HomePage })));

export const HomeRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
