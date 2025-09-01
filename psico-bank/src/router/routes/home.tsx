import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { RouteManagerRoute } from '@/components/router-manager';

const DashboardPage = lazy(() => import('@/pages/dashboard').then(module => ({ default: module.DashboardPage })));
const CustomersPage = lazy(() => import('@/pages/customers').then(module => ({ default: module.CustomersPage })));
const AgendaPage = lazy(() => import('@/pages/agenda').then(module => ({ default: module.AgendaPage })));
const FinancialPage = lazy(() => import('@/pages/financial').then(module => ({ default: module.FinancialPage })));
const TransactionsPage = lazy(() =>
	import('@/pages/transactions').then(module => ({ default: module.TransactionsPage }))
);
const MarketingPage = lazy(() => import('@/pages/marketing').then(module => ({ default: module.MarketingPage })));
const SettingsPage = lazy(() => import('@/pages/settings').then(module => ({ default: module.SettingsPage })));
const MyClinicPage = lazy(() => import('@/pages/my-clinic').then(module => ({ default: module.MyClinicPage })));

const ComponentsPage = lazy(() => import('@/pages/components').then(module => ({ default: module.ComponentsPage })));

export const HomeRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/financial" replace />} />
			<Route
				path="/dashboard"
				element={
					<RouteManagerRoute title="Painel" hasNavbar hasSidebarLeft>
						<DashboardPage />
					</RouteManagerRoute>
				}
			/>
			<Route
				path="/customers"
				element={
					<RouteManagerRoute title="Clientes" hasNavbar hasSidebarLeft>
						<CustomersPage />
					</RouteManagerRoute>
				}
			/>
			<Route
				path="/agenda"
				element={
					<RouteManagerRoute title="Agenda" hasNavbar hasSidebarLeft>
						<AgendaPage />
					</RouteManagerRoute>
				}
			/>
			<Route
				path="/financial"
				element={
					<RouteManagerRoute title="Financeiro" hasNavbar hasSidebarLeft>
						<FinancialPage />
					</RouteManagerRoute>
				}
			/>
			<Route
				path="/transactions"
				element={
					<RouteManagerRoute title="Transações" hasNavbar hasSidebarLeft>
						<TransactionsPage />
					</RouteManagerRoute>
				}
			/>
			<Route
				path="/marketing"
				element={
					<RouteManagerRoute title="Marketing" hasNavbar hasSidebarLeft>
						<MarketingPage />
					</RouteManagerRoute>
				}
			/>
			<Route
				path="/settings"
				element={
					<RouteManagerRoute title="Configurações" hasNavbar hasSidebarLeft>
						<SettingsPage />
					</RouteManagerRoute>
				}
			/>
			<Route
				path="/my-clinic"
				element={
					<RouteManagerRoute title="Minha Clinica" hasNavbar hasSidebarLeft>
						<MyClinicPage />
					</RouteManagerRoute>
				}
			/>

			<Route path="/components" element={<ComponentsPage />} />
		</Routes>
	);
};
