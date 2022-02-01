import { testDecrementAsync, testIncrementAsync } from './Thunks';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IAppDispatch } from 'shared/interfaces/Redux';

interface ITestActions {
  increment: () => void;
  decrement: () => void;
}

export const TestActions = (): ITestActions => {
  const dispatch = useDispatch<IAppDispatch>();

  const increment = useCallback(async () => {
    await dispatch(testIncrementAsync());
  }, [dispatch]);

  const decrement = useCallback(async () => {
    await dispatch(testDecrementAsync());
  }, [dispatch]);

  return {
    increment,
    decrement,
  };
};
