import { create } from 'zustand';

import { NavigationTab, RouterResponse } from '@/utils';

import { createRouterStore } from './Router';

export interface InterfaceState {
	router: RouterResponse;

	favicon: string;
	setFavicon: (url: string) => void;

	navigationItems: NavigationTab[];
	setNavigationItems: (items: NavigationTab[]) => void;
}

export const useInterfaceStore = create<InterfaceState>()((set, get) => ({
	router: createRouterStore(set),

	favicon: '',
	setFavicon: (url: string) => set({ favicon: url }),

	navigationItems: [],
	setNavigationItems: items => set({ navigationItems: items })
}));
