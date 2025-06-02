import {
  Wrapper,
  Label,
  StyledSelect,
  RequiredDot,
} from "./SelectWithLabel.styles";

const SelectWithLabel = ({
  title,
  inputRef,
  required,
  className,
  children,
}) => {
  return (
    <Wrapper>
      <Label>
        {title}
        {required ? <RequiredDot>*</RequiredDot> : null}
      </Label>
      <StyledSelect className={className} {...inputRef}>
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

export default SelectWithLabel;
