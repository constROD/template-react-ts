import React from "react";

export const AsyncLogin = React.lazy(() => import("pages/Login/Login"));
export const AsyncHome = React.lazy(() => import("pages/Home/Home"));
export const AsyncUserLists = React.lazy(() => import("pages/Users/UserLists"));
export const AsyncUserView = React.lazy(() => import("pages/Users/UserView"));
export const AsyncUserEdit = React.lazy(() => import("pages/Users/UserEdit"));
export const AsyncUserNew = React.lazy(() => import("pages/Users/UserNew"));
