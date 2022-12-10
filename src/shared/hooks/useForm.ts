import debounce from 'lodash/debounce';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAsyncFn } from 'react-use';
import { ICheckboxRadio, IForm, IFormElements, IFormHandle, IFormReturn } from 'shared/types/Form';
import { IValidatorError } from 'shared/types/Validator';

/*
	Usage:
		const defaultValues = {
      myText: "",
      mySelect: "test2",
      myCheckbox: [
        { id: "myCheckbox__0", value: "Check 0", checked: true },
        { id: "myCheckbox__1", value: "Check 1", checked: false }
      ],
      myRadio: [
        { id: "myRadio__0", value: "Radio 0", checked: false },
        { id: "myRadio__1", value: "Radio 1", checked: true }
      ]
    }

		const { values, errors, handle } = useForm({ defaultValues });

		const { current: memoizedHandle } = useRef((...args: [React.ChangeEvent<IFormElements>]) => {
      const [event, options] = args;
      event.persist();

      // add your additional logic here..
      // if from outside it will run the logic every type.
      const callback = () => {
        // if from inside of callback this function will call depends on the duration of debounce you set
        // setSomeState(options.someState)
      };

      handle({ event, callback });
		});

		console.log("values: ", values)
		console.log("errors: ", errors)

		Note for attributes: 
		- [type="text"]         - (Required): id, onChange and defaultValue
		- select                - (Required): id, onChange and defaultValue
		- [type="checkbox"]     - (Required): type, name, id, value, onChange and defaultChecked
		- [type="radio"]        - (Required): type, name, id, value, onChange and defaultChecked

		Input:
		<input id="myText" type="text" onChange={e => memoizedHandle(e, { someState: "test" })} defaultValue={values.myText}/>

		Select:
		<select id="mySelect" onChange={memoizedHandle} defaultValue={values.mySelect} >
			<option value="test1">Test1</option>
			<option value="test2">Test2</option>
		</select>

		Important Note for type="checkbox" and type="checkbox": The `name` must be the same so we can group it but the `id` has `__{index}` for us to know the order

		Checkbox: (Static Approach)
		<label htmlFor="myCheckbox__0">Check 0</label>
		<input type="checkbox" id="myCheckbox__0" name="myCheckbox" value="Check 0" onChange={memoizedHandle} />
		<label htmlFor="myCheckbox__1">Check 1</label>
		<input type="checkbox" id="myCheckbox__1" name="myCheckbox" value="Check 1" onChange={memoizedHandle} />

		Radio: (Dynamic Approach)
		<label htmlFor="myRadio__0">{values.myRadio[0].value}</label>
		<input type="radio" id={values.myRadio[0].id} name="myRadio" value={values.myRadio[0].checked} onChange={memoizedHandle} defaultChecked={values.myRadio[0].checked}/>
		<label htmlFor="myRadio__1">{values.myRadio[1].value}</label>
		<input type="radio" id={values.myRadio[1].id} name="myRadio" value={values.myRadio[1].value} onChange={memoizedHandle} defaultChecked={values.myRadio[1].checked}/>
 */

const DEFAULT_OPTIONS = {
  defaultValues: {},
  duration: 300,
};

export const useForm = <T>(options: IForm<T>): IFormReturn<T> => {
  const { defaultValues, duration, validator } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  const [state, setState] = useState(defaultValues);
  const [errors, setErrors] = useState<IValidatorError[] | undefined>(undefined);

  const run = useRef(false);

  const { current: handle } = useRef(
    debounce(({ event, callback }: IFormHandle) => {
      const { target } = event;
      const { type, id, value, checked } = target;

      if (type === 'checkbox') {
        setState((prevState: any) => {
          const [checkboxKey, checkboxIndex]: any = id.split('__');
          const newCheckbox: ICheckboxRadio[] = [...prevState[checkboxKey]];
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
    const element = document.querySelector(`#${id}`) as IFormElements;
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
