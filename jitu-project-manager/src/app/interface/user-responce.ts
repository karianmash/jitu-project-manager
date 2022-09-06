import { User } from './user';

export interface UserResponce {
  message: string;
  user: User;
  token: string;
}
