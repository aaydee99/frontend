import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

import { useStyles } from './styles';
import NavBar from '../NavBar';
import NavDrawer from '../NavDrawer';
import Home from '../../pages';
import Login from '../../pages/login';
import Register from '../../pages/register';
import { routes } from '../../routes';
import { useMeQuery } from '../../query-hooks/useMeQuery';
import Logout from '../../pages/logout';

const App = () => {
	const classes = useStyles();
	const meQuery = useMeQuery();
	const [open, setOpen] = useState(false);
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Router>
			<div className={classes.root}>
				<NavBar handleDrawerOpen={handleDrawerOpen} open={open} />
				<NavDrawer open={open} handleDrawerClose={handleDrawerClose} />
				<Switch>
					<Route path={routes.dashboard.path} exact>
						{meQuery.data?.user ? (
							<Home fixedHeightPaper={fixedHeightPaper} />
						) : (
							<Redirect to={routes.login.path} />
						)}
					</Route>

					<Route path={routes.register.path} exact>
						{!meQuery.data?.user ? (
							<Register />
						) : (
							<Redirect to={routes.dashboard.path} />
						)}
					</Route>

					<Route path={routes.login.path} exact>
						{!meQuery.data?.user ? (
							<Login />
						) : (
							<Redirect to={routes.dashboard.path} />
						)}
					</Route>

					<Route path={routes.logout.path} exact>
						<Logout />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
