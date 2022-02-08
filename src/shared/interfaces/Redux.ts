import createStore from 'shared/redux/store';

export type IConfiguredStore = ReturnType<typeof createStore>;
export type IStoreGetState = IConfiguredStore['getState'];

export type IStoreRootState = ReturnType<IStoreGetState>;
export type IAppDispatch = IConfiguredStore['dispatch'];

export interface IActionResponse<D = undefined> {
  data: D | undefined;
  message: string;
  error?: { [key: string]: unknown } | Error;
}
