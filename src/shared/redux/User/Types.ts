import { ILoginForm } from '../../interfaces/Auth';

export enum UserThunks {
  Login = 'user/login',
  Logout = 'user/logout',
}

export interface IUserState {
  isAuth: boolean;
}

/* Parameters */
export type IUserLoginAsyncParams = ILoginForm;

/* Responses */
export interface IUserLoginAsyncResponse {
  isAuth: boolean;
}
