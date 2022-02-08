import { LoginWrapper } from './Login.styled';

import React, { useCallback, useMemo } from 'react';
import { useAsyncFn } from 'react-use';
import { useForm } from 'shared/hooks/useForm';
import { ILoginForm } from 'shared/interfaces/Auth';
import { IFormElements } from 'shared/interfaces/Form';
import UserActions from 'shared/redux/User/Actions';
import { loginValidator } from 'shared/validators/Login';

const Login: React.FC = () => {
  const defaultValues: ILoginForm = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    []
  );

  const { values, handle } = useForm<ILoginForm>({
    defaultValues,
    validator: loginValidator,
  });

  const memoizedHandle = useCallback(
    (...args: [React.ChangeEvent<IFormElements>]) => {
      const [event] = args;
      event.persist();
      handle({ event });
    },
    [handle]
  );
  const { login } = UserActions();

  const [, loginAsync] = useAsyncFn(async (...args: [ILoginForm]) => {
    const [form] = args;
    const { error } = await login(form);

    if (error) {
      // eslint-disable-next-line no-console
      console.log('login: ', error);
    }
  });

  const loginSubmit = () => loginAsync(values);

  // eslint-disable-next-line no-console
  console.log('values: ', values);

  return (
    <LoginWrapper>
      <input id="email" defaultValue={values.email} onChange={memoizedHandle} />
      <input id="password" defaultValue={values.password} onChange={memoizedHandle} />
      <button onClick={loginSubmit}>Login</button>
    </LoginWrapper>
  );
};

export default Login;
