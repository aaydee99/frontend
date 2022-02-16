import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import { constants } from '../constants';

const Copyright = () => {
	return (
		<Box py={4}>
			<Typography variant='body2' color='textSecondary' align='center'>
				{'Made w/ ❤️ by '}
				<Link
					color='inherit'
					href={constants.authorWebsite}
					target='_blank'
					rel='noopener'
				>
					{'Abdullah Akhtar'}
				</Link>
				{' © '}
				{new Date().getFullYear()}
			</Typography>
		</Box>
	);
};

export default Copyright;
