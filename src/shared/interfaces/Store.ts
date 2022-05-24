type IStoreResponse<T = any> = {
  data: T;
  error: any | null;
} | void;

export interface ITestStore {
  /* States */
  price: number;

  /* Computed States */
  computed: {
    totalPrice: number;
  };

  /* Functions */
  setPrice: (setPrice: number) => IStoreResponse;
}

export interface IUserStore {
  /* States */
  user: string | null;

  /* Computed States */
  computed: {
    isSignedIn: boolean;
  };

  /* Functions */
  login: () => IStoreResponse;
  logout: () => IStoreResponse;
}
