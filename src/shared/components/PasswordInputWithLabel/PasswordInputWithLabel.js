import { useState } from "react";
import {
  Wrapper,
  Label,
  StyledInput,
  RequiredDot,
  VisibleEye,
} from "./PasswordInputWithLabel.styles";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordInputWithLabel = ({
  title,
  value,
  inputRef,
  required,
  className,
}) => {
  const [isVisible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!isVisible);
  };
  return (
    <Wrapper>
      <Label>
        {title}
        {required ? <RequiredDot>*</RequiredDot> : null}
      </Label>
      <StyledInput
        className={className}
        type={isVisible ? "text" : "password"}
        value={value}
        {...inputRef}
      />
      <VisibleEye onClick={handleVisible}>
        {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </VisibleEye>
    </Wrapper>
  );
};

export default PasswordInputWithLabel;
