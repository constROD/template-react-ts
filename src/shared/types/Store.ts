type StoreResponse<T = unknown> = {
  data: T;
  error: unknown | null;
} | void;

export interface UserStore {
  /* States */
  user: string | null;

  /* Computed States */
  computed: {
    isSignedIn: boolean;
  };

  /* Functions */
  login: () => StoreResponse;
  logout: () => StoreResponse;
}
