import { ILoginForm } from 'shared/interfaces/Auth';
import { IValidatorError, IValidatorResponse } from 'shared/interfaces/Validator';
import * as yup from 'yup';

const validate = <T>(schema: yup.ObjectSchema<any>, values: T): Promise<IValidatorResponse<T>> =>
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

export const loginValidator = (values: ILoginForm): Promise<IValidatorResponse<ILoginForm>> => {
  const schema = yup.object().shape({
    email: yup.string().required('Email is required.'),
    password: yup
      .string()
      .min(6, 'Password must be atleast 6 characters.')
      .required('Password is required.'),
  });

  return validate<ILoginForm>(schema, values);
};
