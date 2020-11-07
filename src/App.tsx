import {
  AsyncHome,
  AsyncLogin,
  AsyncUserEdit,
  AsyncUserLists,
  AsyncUserNew,
  AsyncUserView,
} from "components/AsyncRoutes";
import AuthenticatedRoute from "components/AuthenticatedRoute";
import PageNotFound from "components/PageNotFound";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "shared/constants/routes";

const App: React.FC = () => {
  const isAuthenticated = true;

  return (
    <Switch>
      <AuthenticatedRoute
        path={ROUTES.LOGIN}
        component={AsyncLogin}
        isAuthenticated={isAuthenticated}
      />
      <AuthenticatedRoute
        exact
        path={ROUTES.HOME}
        component={AsyncHome}
        isAuthenticated={isAuthenticated}
      />
      <AuthenticatedRoute
        exact
        path={ROUTES.USERS.LIST}
        component={AsyncUserLists}
        isAuthenticated={isAuthenticated}
      />
      {/* Note: if you have /:dynamic and /static. Dapat below ni /static yung route ni /:dynamic */}
      <AuthenticatedRoute
        exact
        path={ROUTES.USERS.NEW}
        component={AsyncUserNew}
        isAuthenticated={isAuthenticated}
      />
      <AuthenticatedRoute
        exact
        path={ROUTES.USERS.VIEW}
        component={AsyncUserView}
        isAuthenticated={isAuthenticated}
      />
      <AuthenticatedRoute
        exact
        path={ROUTES.USERS.EDIT}
        component={AsyncUserEdit}
        isAuthenticated={isAuthenticated}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default App;
