import { LoginForm } from './types';

import { ValidatorResponse } from 'shared/types/Validator';
import { validate } from 'shared/utils/Validator';
import * as yup from 'yup';

export const loginValidator = (values: LoginForm): Promise<ValidatorResponse<LoginForm>> => {
  const schema = yup.object().shape({
    email: yup.string().required('Email is required.'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters.')
      .required('Password is required.'),
  });

  return validate<LoginForm>(schema, values);
};
