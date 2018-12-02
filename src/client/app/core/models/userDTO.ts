import { User } from './user';

export interface UserDTO {
  code: number;
  token: string;
  user: User;
}
