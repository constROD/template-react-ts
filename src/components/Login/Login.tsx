import { LoginWrapper } from './Login.styled';

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import { useForm } from 'shared/hooks/useForm';
import { ILoginForm } from 'shared/interfaces/Auth';
import { IFormElements } from 'shared/interfaces/Form';
import { useUserStore } from 'shared/store';
import CommonUtil from 'shared/utils/Common';
import { loginValidator } from 'shared/validators/Login';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const login = useUserStore(state => state.login);

  const defaultValues: ILoginForm = {
    email: '',
    password: '',
  };

  const { values, handle } = useForm<ILoginForm>({
    defaultValues,
    validator: loginValidator,
  });

  const { current: memoizedHandle } = useRef((...args: [React.ChangeEvent<IFormElements>]) => {
    const [event] = args;
    event.persist();
    handle({ event });
  });

  // eslint-disable-next-line @typescript-eslint/require-await
  const [, loginAsync] = useAsyncFn(async (...args: [ILoginForm]) => {
    const [] = args;

    const response = login();

    if (!response) return navigate(ROUTES.HOME);

    CommonUtil.logger({
      path: 'components/Login/Login.tsx',
      event: 'loginAsync',
      log: response.error,
    });
  });

  const loginSubmit = () => loginAsync(values);

  return (
    <LoginWrapper>
      <div className="content">
        <input id="email" defaultValue={values.email} onChange={memoizedHandle} />
        <input id="password" defaultValue={values.password} onChange={memoizedHandle} />
        <button onClick={loginSubmit}>Login</button>
      </div>
    </LoginWrapper>
  );
};

export default Login;
