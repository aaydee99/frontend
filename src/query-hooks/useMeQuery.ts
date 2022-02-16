import axios from 'axios';
import { useQuery } from 'react-query';

import { queryKeys } from '.';
import { constants } from '../constants';

export const useMeQuery = () => {
	return useQuery(queryKeys.ME, async () => {
		try {
			const { data } = await axios.get(`${constants.serverURI}/auth/me`, {
				headers: { authorization: `Bearer ${localStorage.getItem('qid')}` },
			});

			return data;
		} catch (err) {
			return err.response?.data;
		}
	});
};
