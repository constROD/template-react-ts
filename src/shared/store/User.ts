import immer from 'immer';
import { IStoreSlice, IUserState } from 'shared/interfaces/Store';

const UserSlice: IStoreSlice<IUserState> = (set, get) => ({
  /* States */
  isAuth: false,

  /* Functions */
  login: () => {
    set(
      immer((state: IUserState) => {
        state.isAuth = true;
      })
    );
    return { error: undefined, data: get().isAuth };
  },

  logout: () => {
    set(
      immer((state: IUserState) => {
        state.isAuth = false;
      })
    );
    return { error: undefined, data: get().isAuth };
  },
});

export default UserSlice;
