import { IUserStore } from 'shared/types/Store';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  immer<IUserStore>((set, get) => ({
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
      set((state: IUserStore) => {
        state.user = 'constROD';
      });
    },

    logout: () => {
      set((state: IUserStore) => {
        state.user = null;
      });
    },
  }))
);
