import { LoginWrapper } from './Login.styled';

import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useForm } from 'shared/hooks/useForm';
import { ILoginForm } from 'shared/interfaces/Auth';
import { IFormElements } from 'shared/interfaces/Form';
import UserActions from 'shared/redux/User/Actions';
import { loginValidator } from 'shared/validators/Login';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const defaultValues: ILoginForm = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    []
  );

  const { values, errors, handle } = useForm<ILoginForm>({
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

    if (!error) return navigate(ROUTES.HOME);

    // eslint-disable-next-line no-console
    console.log('login: ', error);
  });

  const loginSubmit = () => loginAsync(values);

  // eslint-disable-next-line no-console
  console.log('values: ', values);
  // eslint-disable-next-line no-console
  console.log('errors: ', errors);

  return (
    <LoginWrapper>
      <input id="email" defaultValue={values.email} onChange={memoizedHandle} />
      <input id="password" defaultValue={values.password} onChange={memoizedHandle} />
      <button onClick={loginSubmit}>Login</button>
    </LoginWrapper>
  );
};

export default Login;
