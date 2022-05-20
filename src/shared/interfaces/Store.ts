import { GetState, SetState } from 'zustand';

interface IStoreResponse<T = any> {
  data: T;
  error: any | null;
}

export type IStoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T;

export interface ITestState {
  /* States */
  data: string;

  /* Functions */
  changeData: (newData: string) => IStoreResponse;
}

export interface IUserState {
  /* States */
  isAuth: boolean;

  /* Functions */
  login: () => IStoreResponse;
  logout: () => IStoreResponse;
}

export type IStoreState = ITestState & IUserState;
