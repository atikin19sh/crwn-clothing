import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          htmlFor={otherProps.name}
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
