import { useState } from "react";
import { IFieldArray, IForm } from "shared/interfaces/utils/form";

export const useForm = <I>({ initialValues }: IForm<I>) => {
  const [values, setValues] = useState(initialValues);

  const setFieldValue = <V>(name: string, value: V) => {
    setValues({ ...values, [name]: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name, checked } = e.target;
    const getValue = () => {
      if (type === "checkbox") return checked;
      return e.target.value;
    };

    setValues({ ...values, [name]: getValue() });
  };

  return {
    values,
    setValues,
    setFieldValue,
    handleChange,
  };
};

export const useFieldArray = <D>({
  fieldName,
  arrayValues,
  defaultValue,
  setFieldValue,
}: IFieldArray<D>) => {
  const newList = [...arrayValues];

  const add = () => {
    newList.push(defaultValue);
    setFieldValue(fieldName, newList);
  };

  const remove = (index: number) => {
    newList.splice(index, 1);
    setFieldValue(fieldName, newList);
  };

  const handleChangeArray = (idx: number, name: string, value: any) => {
    newList[idx] = { ...newList[idx], [name]: value };
    setFieldValue(fieldName, newList);
  };

  return {
    add,
    remove,
    handleChangeArray,
  };
};
