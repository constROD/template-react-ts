export interface ValidatorError {
  id: string;
  message: string;
}

export interface ValidatorResponse<T = undefined> {
  data?: T;
  error?: ValidatorError[];
}
