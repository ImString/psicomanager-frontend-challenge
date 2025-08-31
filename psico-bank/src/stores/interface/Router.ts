import { RouterResponse } from '@/utils';

export const RouterInitialValues: RouterResponse = {
	title: '',
	setTitle: () => {},
	hasNavbar: false,
	setHasNavbar: () => {},
	hasSidebarLeft: false,
	setHasSidebarLeft: () => {},
	navigationPath: [],
	setNavigationPath: () => {},
	location: {},
	setLocation: () => {},
	params: {},
	setParams: () => {},
	searchParams: {},
	setSearchParams: () => {}
};

export const createRouterStore = (set: any): RouterResponse => ({
	title: '',
	setTitle: (title: string) => set((state: any) => ({ router: { ...state.router, title } })),

	hasNavbar: false,
	setHasNavbar: (hasNavbar: boolean) => set((state: any) => ({ router: { ...state.router, hasNavbar } })),

	hasSidebarLeft: false,
	setHasSidebarLeft: (hasSidebarLeft: boolean) =>
		set((state: any) => ({ router: { ...state.router, hasSidebarLeft } })),

	navigationPath: [],
	setNavigationPath: (navigationPath: string[]) =>
		set((state: any) => ({ router: { ...state.router, navigationPath } })),

	location: {},
	setLocation: (location: any) => set((state: any) => ({ router: { ...state.router, location } })),

	params: {},
	setParams: (params: any) => set((state: any) => ({ router: { ...state.router, params } })),

	searchParams: {},
	setSearchParams: (searchParams: any) => set((state: any) => ({ router: { ...state.router, searchParams } }))
});
