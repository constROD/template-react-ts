import { TestThunks } from './Types';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const testIncrementAsync = createAsyncThunk(TestThunks.Increment, async () => {});

export const testDecrementAsync = createAsyncThunk(TestThunks.Decrement, async () => {});
