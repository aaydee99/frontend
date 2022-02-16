import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { queryKeys } from '.';
import { constants } from '../constants';

interface RegisterSchema {
	name: string;
	phone: string;
	email: string;
	password: string;
}

export const useRegisterMutation = () => {
	const queryClient = useQueryClient();

	return useMutation(
		async (values: RegisterSchema) => {
			try {
				const { data } = await axios.post(
					`${constants.serverURI}/auth/register`,
					values
				);

				return data;
			} catch (err) {
				return err.response?.data;
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
