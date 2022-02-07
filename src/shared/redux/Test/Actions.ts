import { testDecrementAsync, testIncrementAsync } from './Thunks';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IActionResponse, IAppDispatch } from 'shared/interfaces/Redux';

const TestActions = () => {
  const dispatch = useDispatch<IAppDispatch>();

  const increment = useCallback(async () => {
    const { payload } = await dispatch(testIncrementAsync());
    return payload as IActionResponse<undefined>;
  }, [dispatch]);

  const decrement = useCallback(async () => {
    const { payload } = await dispatch(testDecrementAsync());
    return payload as IActionResponse<undefined>;
  }, [dispatch]);

  return {
    increment,
    decrement,
  };
};

export default TestActions;
