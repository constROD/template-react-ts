import { IValidatorError, IValidatorResponse } from './Validator';

import React from 'react';

export interface IForm<T> {
  defaultValues: T;
  duration?: number;
  validator?: (values: T) => Promise<IValidatorResponse<T>>;
}

export interface IFormReturn<T> {
  values: T;
  errors: IValidatorError[] | undefined;
  handle: ({ event, callback }: IFormHandle) => void;
  setValue: (id: string, newValue: unknown) => void;
  setValues: (newValues: T) => void;
}

export type IFormElements = HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement;

export interface IFormHandle {
  event: React.ChangeEvent<IFormElements>;
  callback?: () => void;
}

export interface ICheckboxRadio {
  id: string;
  value: string;
  checked: boolean;
}
