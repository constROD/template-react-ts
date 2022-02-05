import { LoginWrapper } from './Login.styled';

import React, { useCallback, useMemo } from 'react';
import { useForm } from 'shared/hooks/useForm';
import { ILoginForm } from 'shared/interfaces/Auth';
import { IFormElements } from 'shared/interfaces/Form';
import { loginValidator } from 'shared/validators/Login';

const Login: React.FC = () => {
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

  // eslint-disable-next-line no-console
  const login = () => console.log('login: ', values);

  // eslint-disable-next-line no-console
  console.log('values: ', values); // for testing
  // eslint-disable-next-line no-console
  console.log('errors: ', errors); // for testing

  return (
    <LoginWrapper>
      <input id="email" defaultValue={values.email} onChange={memoizedHandle} />
      <input id="password" defaultValue={values.password} onChange={memoizedHandle} />
      <button onClick={login}>Login</button>
    </LoginWrapper>
  );
};

export default Login;
