import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/home').then(module => ({ default: module.HomePage })));
const ComponentsPage = lazy(() => import('@/pages/components').then(module => ({ default: module.ComponentsPage })));

export const HomeRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/components" element={<ComponentsPage />} />
		</Routes>
	);
};
