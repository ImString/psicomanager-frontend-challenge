export interface RouterResponse {
	title: string;
	setTitle: (title: string) => void;
	hasNavbar: boolean;
	setHasNavbar: (hasNavbar: boolean) => void;
	hasSidebarLeft: boolean;
	setHasSidebarLeft: (hasSidebarLeft: boolean) => void;
	navigationPath: string[];
	setNavigationPath: (navigationPath: string[]) => void;
	location: any;
	setLocation: (location: any) => void;
	params: any;
	setParams: (params: any) => void;
	searchParams: any;
	setSearchParams: (searchParams: any) => void;
}
