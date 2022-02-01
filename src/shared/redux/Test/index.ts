import { testIncrementAsync } from './Thunks';
import { ITestState } from './Types';

import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: ITestState = {
  count: 0,
};

const testSlice = createSlice({
  name: 'tests',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(testIncrementAsync.fulfilled, state => {
      state.count++;
    });
  },
});

export default testSlice.reducer;
