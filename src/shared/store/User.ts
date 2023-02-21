import { type UserStore } from 'shared/types/Store';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

/**
 * ? Note: When using Computed States you must follow the following rules.
 *
 * ! Wrong:
 * ! const { isSignedIn } = useUserStore(state => state.computed);
 *
 * ! If you use the following, it will not detect the change.
 *
 * * Correct:
 * * const isSignedIn = useUserStore(state => state.computed.isSignedIn);
 *
 * * If you use the following, it will detect the change.
 */

export const useUserStore = create(
  immer<UserStore>((set, get) => ({
    /* States */
    user: null,

    /* Computed */
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
