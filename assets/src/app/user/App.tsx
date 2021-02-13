import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../styles/theme';
import MainPage from './pages/MainPage';
import Navbar from '../../components/theme/Navbar';
import CoursesPage from './pages/CoursesPage';
import ConferencePage from './pages/ConferencePage';


const Loader = () => (
	<div className='App'>
		<div>loading...</div>
	</div>
);


const App = (): ReactElement => (
	<ThemeProvider theme={theme}>
		{/* <Provider store={store}> */}
			<Suspense fallback={<Loader />}>
			<BrowserRouter >
				<Navbar  full={true}></Navbar>
				<Switch>
					<Route path='/dashboard/courses' >
						<CoursesPage  />
					</Route>
					<Route path='/dashboard/conference' >
						<ConferencePage  />
					</Route>
					<Route path='/dashboard' >
						<MainPage  />
					</Route>
				</Switch>
			</BrowserRouter>
		</Suspense>
		{/* </Provider> */}
	</ThemeProvider>
)

export default App