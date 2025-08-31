import { FaBuilding, FaBullhorn, FaCalendarAlt, FaFileAlt, FaMoneyBillAlt, FaUsers } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { IoIosSpeedometer } from 'react-icons/io';

export interface NavigationTab {
	id: string;
	name: string;
	url: string;
	icon?: any;
}

export const useNavigationItems = (): NavigationTab[] => {
	const navigationItems = [
		{
			id: 'dashboard',
			name: 'Painel',
			icon: IoIosSpeedometer,
			url: '/'
		},
		{
			id: 'customers',
			name: 'Clientes',
			icon: FaUsers,
			url: '/customers'
		},
		{
			id: 'agenda',
			name: 'Agenda',
			icon: FaCalendarAlt,
			url: '/agenda'
		},
		{
			id: 'financial',
			name: 'Financeiro',
			icon: FaMoneyBillAlt,
			url: '/financial'
		},
		{
			id: 'transactions',
			name: 'Relatórios',
			icon: FaFileAlt,
			url: '/transactions'
		},
		{
			id: 'marketing',
			name: 'Marketing',
			icon: FaBullhorn,
			url: '/marketing'
		},
		{
			id: 'settings',
			name: 'Configuração',
			icon: FaGear,
			url: '/settings'
		},
		{
			id: 'my-clinic',
			name: 'Minha clínica',
			icon: FaBuilding,
			url: '/my-clinic'
		}
	];

	return navigationItems;
};
