import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { useStyles } from './styles';
import NavItem from '../NavItem';
import { routes } from '../../routes';
import { useMeQuery } from '../../query-hooks/useMeQuery';

interface Props {
	open: boolean;
	handleDrawerClose: () => void;
}

const NavDrawer = ({ open, handleDrawerClose }: Props) => {
	const classes = useStyles();
	const meQuery = useMeQuery();

	return (
		<Drawer
			variant='permanent'
			classes={{
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
			}}
			open={open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				{meQuery.data?.user ? (
					<NavItem
						itemIcon={ExitToAppIcon}
						itemText='Logout'
						linkTo={routes.logout.path}
					/>
				) : (
					<>
						<NavItem
							itemIcon={PersonAddIcon}
							itemText='Register'
							linkTo={routes.register.path}
						/>
						<NavItem
							itemIcon={LockOutlinedIcon}
							itemText='Login'
							linkTo={routes.login.path}
						/>
					</>
				)}
			</List>
		</Drawer>
	);
};

export default NavDrawer;
