export interface IForm<I> {
  initialValues: I;
}

export interface IFieldArray<D> {
  fieldName: string;
  arrayValues: D[];
  defaultValue: D;
  setFieldValue: (name: string, value: any) => void;
}
