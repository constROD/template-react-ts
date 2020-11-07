export const ROUTES = {
  HOME: "/",
  USERS: {
    LIST: "/users",
    VIEW: "/users/:id",
    NEW: "/users/new",
    EDIT: "/users/edit/:id",
    PARSE: {
      VIEW: (id: number | string) => `/users/${id}`,
      EDIT: (id: number | string) => `/users/edit/${id}`,
    },
  },
  LOGIN: "/login",
};
