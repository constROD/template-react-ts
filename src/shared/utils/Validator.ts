import { IValidatorError, IValidatorResponse } from 'shared/types/Validator';
import * as yup from 'yup';

export const validate = <T>(
  schema: yup.ObjectSchema<any>,
  values: T
): Promise<IValidatorResponse<T>> =>
  new Promise(resolve => {
    schema
      .validate(values, { abortEarly: false, stripUnknown: true })
      .then(data => {
        const sanitizedData = Object.keys(data).length !== 0 ? (data as T) : undefined;
        resolve({ data: sanitizedData, error: undefined });
      })
      .catch(err => {
        const error = err.inner.map((e: { path: string; message: string }) => ({
          id: e.path,
          message: e.message,
        })) as IValidatorError[];
        resolve({ data: undefined, error });
      });
  });
