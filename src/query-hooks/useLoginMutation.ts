import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { queryKeys } from '.';
import { constants } from '../constants';

interface LoginSchema {
	email: string;
	password: string;
}

export const useLoginMutation = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async (values: LoginSchema) => {
			try {
				const { data } = await axios.post(
					`${constants.serverURI}/auth/login`,
					values
				);

				return data;
			} catch (error) {
			}
		},
		{
			onSuccess: (data) => {
				queryClient.setQueryData(queryKeys.ME, data);
				localStorage.setItem('qid', data?.user?.token || '');
			},
		}
	);
};
