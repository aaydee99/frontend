import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';
import { constants } from '../../constants';
import { routes } from '../../routes';
import { useMeQuery } from '../../query-hooks/useMeQuery';

interface Props {
	handleDrawerOpen: () => void;
	open: boolean;
}

const NavBar = ({ handleDrawerOpen, open }: Props) => {
	const classes = useStyles();
	const meQuery = useMeQuery();

	return (
		<AppBar
			position='absolute'
			className={clsx(classes.appBar, open && classes.appBarShift)}
		>
			<Toolbar className={classes.toolbar}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component='h1'
					variant='h6'
					color='inherit'
					noWrap
					className={classes.title}
				>
					<Link
						to={meQuery.data?.user ? routes.dashboard.path : routes.login.path}
						className={classes.link}
					>
						{constants.title}
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
