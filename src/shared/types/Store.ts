type StoreResponse<T = any> = {
  data: T;
  error: any | null;
} | void;

export interface TestStore {
  /* States */
  price: number;

  /* Computed States */
  computed: {
    totalPrice: number;
  };

  /* Functions */
  setPrice: (setPrice: number) => StoreResponse;
}

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
