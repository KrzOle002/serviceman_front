import {
  Wrapper,
  Label,
  StyledInput,
  RequiredDot,
} from "./TextAreaWithLabel.styles";

const TextAreaWithLabel = ({
  type,
  title,
  rows,
  inputRef,
  className,
  required,
}) => {
  return (
    <Wrapper>
      <Label>
        {title}
        {required ? <RequiredDot>*</RequiredDot> : null}
      </Label>
      <StyledInput
        type={type}
        rows={rows}
        {...inputRef}
        className={className}
      />
    </Wrapper>
  );
};

export default TextAreaWithLabel;
