/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ILoginForm } from 'shared/interfaces/Auth';
import { IErrorValidator } from 'shared/interfaces/Form';
import * as yup from 'yup';

export const loginValidator = (values: ILoginForm): Promise<IErrorValidator[] | null> => {
  return new Promise(resolve => {
    const schema = yup.object().shape({
      email: yup.string().required('Email is required.'),
      password: yup
        .string()
        .min(6, 'Password must be atleast 6 characters.')
        .required('Password is required.'),
    });

    schema
      .validate(values, { abortEarly: false })
      .then(() => resolve(null))
      .catch(error =>
        resolve(
          error.inner.map((e: { path: string; message: string }) => ({
            id: e.path,
            message: e.message,
          })) as IErrorValidator[]
        )
      );
  });
};
