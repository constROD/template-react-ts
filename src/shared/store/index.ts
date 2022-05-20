import TestSlice from './Test';
import UserSlice from './User';

import { IStoreState } from 'shared/interfaces/Store';
import create, { GetState, SetState } from 'zustand';

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...TestSlice(set, get),
  ...UserSlice(set, get),
});

const useAppStore = create<IStoreState>(createRootSlice);

export default useAppStore;
