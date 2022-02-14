import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import { styled } from 'shared/theme';

const NotFoundPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
