import { instance } from 'api';
import { User } from 'types/user';

export const fetchUserFromApi = (userId: number) => instance.get<User>(`/users/${userId}`);
