import { User } from '../../core/models/user';
import { ErrorLogin } from '../../core/models/errorLogin';
import { UserDTO } from '../../core/models/userDTO';
import { isNullOrUndefined } from 'util';

export interface AuthState {
  user: User;
  error: ErrorLogin;
  authenticating: boolean;
}

const getDefaultUser: () => User = () => {
  const currentUser: UserDTO = JSON.parse(localStorage.getItem('currentUser'));
  if (isNullOrUndefined(currentUser)) return null;
  return currentUser.user;
};

export const defaultAuthState: AuthState = {
  user: getDefaultUser(),
  error: null,
  authenticating: false
};
