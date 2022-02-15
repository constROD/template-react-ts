import { HomeWrapper } from './Home.styled';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import UserActions from 'shared/redux/User/Actions';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = UserActions();

  const [, logoutAsync] = useAsyncFn(async () => {
    const { error } = await logout();

    if (!error) return navigate(ROUTES.LOGIN);

    // eslint-disable-next-line no-console
    console.log('logout: ', error);
  });

  return (
    <HomeWrapper>
      This is HomePage. <button onClick={logoutAsync}>Logout</button>
    </HomeWrapper>
  );
};

export default Home;
