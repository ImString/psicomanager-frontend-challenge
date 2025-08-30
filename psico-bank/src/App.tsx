import router from '@/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className="main">
				<RouterProvider router={router} />
			</div>
		</ThemeProvider>
	);
};
