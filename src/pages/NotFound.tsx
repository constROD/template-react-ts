import { NotFoundPageWrapper } from './NotFound.styled';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageWrapper>
      <span>Sorry, the page you visited does not exist.</span>
      <button onClick={() => navigate(ROUTES.HOME)}>Back Home</button>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
