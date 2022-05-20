import immer from 'immer';
import { ITestState, IStoreSlice } from 'shared/interfaces/Store';

const TestSlice: IStoreSlice<ITestState> = (set, get) => ({
  /* States */
  data: '',

  /* Functions */
  changeData: (newData: string) => {
    set(
      immer((state: ITestState) => {
        state.data = newData;
      })
    );
    return { error: undefined, data: get().data };
  },
});

export default TestSlice;
