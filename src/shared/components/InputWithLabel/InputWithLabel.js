import {
  Wrapper,
  Label,
  StyledInput,
  RequiredDot,
} from "./InputWithLabel.styles";

const InputWithLabel = ({
  type,
  title,
  value,
  inputRef,
  required,
  className,
  disabled,
  onChange,
}) => {
  return (
    <Wrapper>
      <Label>
        {title}
        {required ? <RequiredDot>*</RequiredDot> : null}
      </Label>
      <StyledInput
        disabled={disabled ? true : false}
        className={className}
        onChange={onChange}
        type={type}
        value={value}
        {...inputRef}
      />
    </Wrapper>
  );
};

export default InputWithLabel;
