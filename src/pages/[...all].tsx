import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center">
      <span>Sorry, the page you visited does not exist.</span>
      <button onClick={() => navigate(ROUTES.HOME)}>Back Home</button>
    </div>
  );
};

export default NotFoundPage;
