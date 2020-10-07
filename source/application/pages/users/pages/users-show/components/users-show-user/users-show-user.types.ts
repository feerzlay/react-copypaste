import { Resource } from 'react-use-resource';
import { IUser } from '~modules/features/users';

export interface IUsersShowUserProps {
  userResource: Resource<{ data: IUser }>;
}
