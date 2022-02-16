import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { constants } from '../constants';
import { useLogoutMutation } from '../query-hooks/useLogoutMutation';
import { routes } from '../routes';

const Logout = () => {
	const history = useHistory();
	const logoutMutation = useLogoutMutation();

	useEffect(() => {
		document.title = `Logout | ${constants.title}`;

		(async () => {
			await logoutMutation.mutateAsync();
			history.push(routes.login.path);
		})();

		// eslint-disable-next-line
	}, []);

	return null;
};

export default Logout;
