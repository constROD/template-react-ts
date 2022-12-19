import debounce from 'lodash/debounce';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAsyncFn } from 'react-use';
import { CheckboxRadio, Form, FormElements, FormHandle, FormReturn } from 'shared/types/Form';
import { ValidatorError } from 'shared/types/Validator';

const DEFAULT_OPTIONS = {
  defaultValues: {},
  duration: 300,
};

export const useForm = <T>(options: Form<T>): FormReturn<T> => {
  const { defaultValues, duration, validator } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  const [state, setState] = useState(defaultValues);
  const [errors, setErrors] = useState<ValidatorError[] | undefined>(undefined);

  const run = useRef(false);

  const { current: handle } = useRef(
    debounce(({ event, callback }: FormHandle) => {
      const { target } = event;
      const { type, id, value, checked } = target;

      if (type === 'checkbox') {
        setState((prevState: any) => {
          const [checkboxKey, checkboxIndex]: any = id.split('__');
          const newCheckbox: CheckboxRadio[] = [...prevState[checkboxKey]];
          newCheckbox[checkboxIndex] = {
            ...newCheckbox[checkboxIndex],
            value,
            checked,
          };
          return { ...prevState, [checkboxKey]: newCheckbox };
        });
      } else if (type === 'radio') {
        setState((prevState: any) => {
          const [radioKey, radioIndex] = id.split('__');
          const newRadio = [...prevState[radioKey]].reduce((accum, current, index) => {
            if (Number(radioIndex) === Number(index))
              return [...accum, { ...current, value, checked: true }];
            return [...accum, { ...current, checked: false }];
          }, []);
          return { ...prevState, [radioKey]: newRadio };
        });
      } else {
        setState(prevState => ({ ...prevState, [id]: value }));
      }
      if (callback) callback();
    }, duration)
  );

  const setValue = useCallback((id: string, newValue: any) => {
    const element = document.querySelector(`#${id}`) as FormElements;
    if (!element) return;
    if (element.type === 'checkbox') {
      setState((prevState: any) => {
        const [checkboxKey, checkboxIndex]: any = id.split('__');
        const newCheckbox = [...prevState[checkboxKey]];
        newCheckbox[checkboxIndex] = {
          ...newCheckbox[checkboxIndex],
          ...newValue,
        };
        return { ...prevState, [checkboxKey]: newCheckbox };
      });
      if (newValue.value) element.value = newValue.value;
      element.checked = newValue.checked;
    } else if (element.type === 'radio') {
      setState((prevState: any) => {
        const [radioKey, radioIndex] = id.split('__');
        const newRadio = [...prevState[radioKey]].reduce((accum, current, index) => {
          if (Number(radioIndex) === Number(index)) return [...accum, { ...current, ...newValue }];
          return [...accum, { ...current, checked: false }];
        }, []);
        return { ...prevState, [radioKey]: newRadio };
      });
      if (newValue.value) element.value = newValue.value;
      element.checked = newValue.checked;
    } else {
      setState(prevState => ({ ...prevState, [id]: newValue }));
      element.value = newValue;
    }
  }, []);

  const setValues = useCallback((newValues: T) => {
    setState(prevState => ({ ...prevState, ...newValues }));
  }, []);

  const [, validatorAsync] = useAsyncFn(async (...args: [T]) => {
    const [values] = args;
    if (validator) {
      const { error } = await validator(values);
      setErrors(error);
    }
  });

  useEffect(() => {
    if (run.current) {
      validatorAsync(state);
    }

    return () => {
      run.current = true;
    };
  }, [state, validatorAsync]);

  return useMemo(
    () => ({
      values: state,
      errors,
      handle,
      setValue,
      setValues,
    }),
    [state, errors, handle, setValue, setValues]
  );
};
