import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import Dashboard from '../../templates/Dashboard'
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../../styles/theme';


const Loader = () => (
	<div className='App'>
		<div>loading...</div>
	</div>
);

const App = (): ReactElement => (
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<Suspense fallback={<Loader />}>
				<BrowserRouter basename='dashboard'>
					<Switch>
						<Route path='/' exact>
							<Dashboard />
						</Route>
					</Switch>
				</BrowserRouter>
			</Suspense>
		</Provider>
	</ThemeProvider>
)

export default App