import { ValidatorError, ValidatorResponse } from './Validator';

import React from 'react';

export interface Form<T> {
  defaultValues: T;
  duration?: number;
  validator?: (values: T) => Promise<ValidatorResponse<T>>;
}

export interface FormReturn<T> {
  values: T;
  errors: ValidatorError[] | undefined;
  handle: ({ event, callback }: FormHandle) => void;
  setValue: (id: string, newValue: unknown) => void;
  setValues: (newValues: T) => void;
}

export type FormElements = HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement;

export interface FormHandle {
  event: React.ChangeEvent<FormElements>;
  callback?: () => void;
}

export interface CheckboxRadio {
  id: string;
  value: string;
  checked: boolean;
}
