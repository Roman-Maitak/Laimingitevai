type FormSelectOptionProps = {
  name: string;
  value: string;
};

const FormSelectOption = ({ name, value }: FormSelectOptionProps) => {
  return (
    <option className="" value={value}>
      {name}
    </option>
  );
};

export default FormSelectOption;
