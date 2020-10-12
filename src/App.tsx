import AuthenticatedRoute from "components/AuthenticatedRoute";
import PageNotFound from "components/PageNotFound";
import Home from "pages/Home";
import Login from "pages/Login";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "shared/constants/routes";

const App: React.FC = () => {
  const isAuthenticated = true;

  return (
    <Switch>
      <AuthenticatedRoute
        path={ROUTES.login}
        component={Login}
        isAuthenticated={isAuthenticated}
      />
      <AuthenticatedRoute
        exact
        path={ROUTES.home}
        component={Home}
        isAuthenticated={isAuthenticated}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default App;
