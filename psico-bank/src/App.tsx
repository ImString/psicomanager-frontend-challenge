import router from '@/router';
import { RouterProvider } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className="main">
				<RouterProvider router={router} />
			</div>

			{/* TODO: Switch to your own notification system  */}
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="colored"
				transition={Slide}
			/>
		</ThemeProvider>
	);
};
