import { ILoginForm } from 'shared/types/Auth';
import { IValidatorResponse } from 'shared/types/Validator';
import { validate } from 'shared/utils/Validator';
import * as yup from 'yup';

export const loginValidator = (values: ILoginForm): Promise<IValidatorResponse<ILoginForm>> => {
  const schema = yup.object().shape({
    email: yup.string().required('Email is required.'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters.')
      .required('Password is required.'),
  });

  return validate<ILoginForm>(schema, values);
};
