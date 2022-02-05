import { DebouncedFunc } from 'lodash';
import React from 'react';

export interface IForm<T> {
  defaultValues: T;
  duration?: number;
  validator?: (values: T) => Promise<IErrorValidator[] | null>;
}

export interface IFormReturn<T> {
  values: T;
  errors: IErrorValidator[] | null;
  handle: DebouncedFunc<({ event, callback }: IFormHandle) => void>;
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

export interface IErrorValidator {
  id: string;
  message: string;
}
