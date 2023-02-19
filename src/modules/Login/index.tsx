import React, { ChangeEvent, useState } from 'react';
import { useUserStore } from 'shared/store';
import { z } from 'zod';
import { loginSchema } from './validators';

const Login: React.FC = () => {
  const defaultValues: z.infer<typeof loginSchema> = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(defaultValues);

  const login = useUserStore(state => state.login);

  const handleLogin = () => {
    const isValid = loginSchema.safeParse(values);

    if (!isValid.success) {
      console.log({ error: isValid.error });
    } else {
      console.log({ data: isValid.data });
      login();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex h-auto w-[500px] flex-col gap-2 border-2 p-4">
        <input
          className="border-2 outline-none"
          name="email"
          placeholder="Email"
          defaultValue={values.email}
          onChange={handleChange}
        />
        <input
          className="border-2 outline-none"
          name="password"
          type="password"
          placeholder="Password"
          defaultValue={values.password}
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
