/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ILoginForm } from 'shared/interfaces/Auth';
import { IValidatorError, IValidatorResponse } from 'shared/interfaces/Validator';
import * as yup from 'yup';

export const loginValidator = (values: ILoginForm): Promise<IValidatorResponse<ILoginForm>> =>
  new Promise(resolve => {
    const schema = yup.object().shape({
      email: yup.string().required('Email is required.'),
      password: yup
        .string()
        .min(6, 'Password must be atleast 6 characters.')
        .required('Password is required.'),
    });

    schema
      .validate(values, { abortEarly: false, stripUnknown: true })
      .then(data => {
        const sanitizeData = data as ILoginForm;
        resolve({ data: sanitizeData, error: undefined });
      })
      .catch(err => {
        const error = err.inner.map((e: { path: string; message: string }) => ({
          id: e.path,
          message: e.message,
        })) as IValidatorError[];
        resolve({ data: undefined, error });
      });
  });
