import { IUserLoginAsyncParams, IUserLoginAsyncResponse, UserThunks } from './Types';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { IActionResponse } from 'shared/interfaces/Redux';

export const userLoginAsync = createAsyncThunk(
  UserThunks.Login,
  (params: IUserLoginAsyncParams): IActionResponse<IUserLoginAsyncResponse> => {
    try {
      if (params.email && params.password) {
        return { message: 'You are now logged in.', data: { isAuth: true } };
      }
      return { message: 'Invalid email or password.', data: undefined };
    } catch (err) {
      const error = err as Error;
      return { message: error.message, data: undefined, error };
    }
  }
);

export const userLogoutAsync = createAsyncThunk(UserThunks.Logout, (): IActionResponse => {
  try {
    return { message: 'You are now logged out.', data: undefined };
  } catch (err) {
    const error = err as Error;
    return { message: error.message, data: undefined, error };
  }
});
