import immer from 'immer';
import { ITestStore } from 'shared/interfaces/Store';
import create from 'zustand';

export const useTestStore = create<ITestStore>((set, get) => ({
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
    set(
      immer((state: ITestStore) => {
        state.price = payload;
      })
    );
    return { error: undefined, data: get().price };
  },
}));
