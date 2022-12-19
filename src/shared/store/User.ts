import { UserStore } from 'shared/types/Store';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useUserStore = create(
  immer<UserStore>((set, get) => ({
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
      set((state: UserStore) => {
        state.user = 'constROD';
      });
    },

    logout: () => {
      set((state: UserStore) => {
        state.user = null;
      });
    },
  }))
);
