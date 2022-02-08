import { userLoginAsync, userLogoutAsync } from './Thunks';
import { IUserLoginAsyncParams, IUserLoginAsyncResponse } from './Types';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IActionResponse, IAppDispatch } from 'shared/interfaces/Redux';

const UserActions = () => {
  const dispatch = useDispatch<IAppDispatch>();

  const login = useCallback(
    async (params: IUserLoginAsyncParams) => {
      const { payload } = await dispatch(userLoginAsync(params));
      return payload as IActionResponse<IUserLoginAsyncResponse>;
    },
    [dispatch]
  );

  const logout = useCallback(async () => {
    const { payload } = await dispatch(userLogoutAsync());
    return payload as IActionResponse<undefined>;
  }, [dispatch]);

  return {
    login,
    logout,
  };
};

export default UserActions;
