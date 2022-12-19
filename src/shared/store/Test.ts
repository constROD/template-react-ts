import { TestStore } from 'shared/types/Store';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useTestStore = create(
  immer<TestStore>((set, get) => ({
    /* States */
    price: 0,

    /* Computed States */
    computed: {
      get totalPrice() {
        return get().price + 100;
      },
    },

    /* Functions */
    setPrice: (payload: number) => {
      set((state: TestStore) => {
        state.price = payload;
      });
      return { error: undefined, data: get().price };
    },
  }))
);
