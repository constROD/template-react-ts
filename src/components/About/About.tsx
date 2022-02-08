import { AboutWrapper } from './About.styled';

import React from 'react';
import { useAsyncFn } from 'react-use';
import UserActions from 'shared/redux/User/Actions';

const About: React.FC = () => {
  const { logout } = UserActions();

  const [, logoutAsync] = useAsyncFn(async () => {
    const { error } = await logout();

    if (error) {
      // eslint-disable-next-line no-console
      console.log('logout: ', error);
    }
  });

  return (
    <AboutWrapper>
      This is AboutPage. <button onClick={logoutAsync}>Logout</button>
    </AboutWrapper>
  );
};

export default About;
