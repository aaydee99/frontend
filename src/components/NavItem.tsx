import { SvgIconTypeMap } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	link: {
		color: 'inherit',
		textDecoration: 'none',
	},
}));

interface Props {
	itemIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
	itemText: string;
	linkTo: string;
}

const NavItem = ({ itemIcon: ItemIcon, itemText, linkTo }: Props) => {
	const classes = useStyles();

	return (
		<Link to={linkTo} className={classes.link}>
			<ListItem button>
				<ListItemIcon>
					<ItemIcon />
				</ListItemIcon>
				<ListItemText primary={itemText} />
			</ListItem>
		</Link>
	);
};

export default NavItem;
