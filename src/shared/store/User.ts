import immer from 'immer';
import { IUserStore } from 'shared/interfaces/Store';
import create from 'zustand';

export const useUserStore = create<IUserStore>((set, get) => ({
  /* States */
  user: null,

  /* Computed States */
  computed: {
    get isSignedIn() {
      return !!get().user;
    },
  },

  /* Functions */
  login: () => {
    set(
      immer((state: IUserStore) => {
        state.user = 'constROD';
      })
    );
  },

  logout: () => {
    set(
      immer((state: IUserStore) => {
        state.user = null;
      })
    );
  },
}));
