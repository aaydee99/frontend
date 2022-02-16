import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { queryKeys } from '.';
import { constants } from '../constants';

export const useLogoutMutation = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async () => {
			try {
				const { data } = await axios.get(`${constants.serverURI}/auth/logout`, {
					headers: { authorization: `Bearer ${localStorage.getItem('qid')}` },
				});

				return data;
			} catch (err) {
				return err.response?.data;
			}
		},
		{
			onSuccess: (data) => {
				localStorage.removeItem('qid');
				queryClient.setQueryData(queryKeys.ME, data);
			},
		}
	);
};
