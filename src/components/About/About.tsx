import { AboutWrapper } from './About.styled';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAsyncFn } from 'react-use';
import { ROUTES } from 'shared/constants/Routes';
import UserActions from 'shared/redux/User/Actions';
import CommonUtil from 'shared/utils/Common';

const About: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = UserActions();

  const [, logoutAsync] = useAsyncFn(async () => {
    const { error } = await logout();

    if (!error) return navigate(ROUTES.LOGIN);

    CommonUtil.logger({
      path: 'components/About/About.tsx',
      event: 'loginAsync',
      log: error,
    });
  });

  return (
    <AboutWrapper>
      This is AboutPage. <button onClick={logoutAsync}>Logout</button>
    </AboutWrapper>
  );
};

export default About;
