import immer from 'immer';
import { ITestState, IStoreSlice } from 'shared/interfaces/Store';

const TestSlice: IStoreSlice<ITestState> = (set, get) => ({
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
      immer((state: ITestState) => {
        state.price = payload;
      })
    );
    return { error: undefined, data: get().price };
  },
});

export default TestSlice;
