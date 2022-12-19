import { LoginWrapper } from './index.styled';
import { LoginForm } from './types';
import { loginValidator } from './validators';

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useForm } from 'shared/hooks/useForm';
import { useUserStore } from 'shared/store';
import { FormElements } from 'shared/types/Form';
import CommonUtil from 'shared/utils/Common';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useUserStore(state => state.login);

  const defaultValues: LoginForm = {
    email: '',
    password: '',
  };

  const { values, handle } = useForm<LoginForm>({
    defaultValues,
    validator: loginValidator,
  });

  const { current: memoizedHandle } = useRef((...args: [React.ChangeEvent<FormElements>]) => {
    const [event] = args;
    event.persist();
    handle({ event });
  });

  // eslint-disable-next-line @typescript-eslint/require-await
  const [, loginAsync] = useAsyncFn(async (...args: [LoginForm]) => {
    const [] = args;

    const response = login();

    if (!response) return navigate(ROUTES.HOME);

    CommonUtil.logger({
      path: 'modules/Login/index.tsx',
      event: 'loginAsync',
      log: response.error,
    });
  });

  const loginSubmit = () => loginAsync(values);

  return (
    <LoginWrapper>
      <input id="email" defaultValue={values.email} onChange={memoizedHandle} />
      <input id="password" defaultValue={values.password} onChange={memoizedHandle} />
      <button onClick={loginSubmit}>Login</button>
    </LoginWrapper>
  );
};

export default Login;
