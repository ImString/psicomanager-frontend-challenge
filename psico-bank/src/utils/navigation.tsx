import { useInterfaceStore } from '@/stores';

export interface NavigationTab {
	id: string;
	name: string;
	url?: string;
	icon?: any;
	tabs?: NavigationTab[];
}

export const getTabFromPath = (tabsPath: string[] = []): NavigationTab | null | undefined => {
	const interfaceStore = useInterfaceStore();

	let tabResponse: NavigationTab | undefined | null = interfaceStore.navigationItems.find(
		tab => tab.id === tabsPath[0]
	);

	for (const tabId of tabsPath.slice(1)) {
		if (tabResponse?.tabs) tabResponse = tabResponse.tabs.find(tab => tab.id === tabId) || null;
		if (!tabResponse) break;
	}

	return tabResponse || { id: 'home', name: 'Home', tabs: interfaceStore.navigationItems };
};
