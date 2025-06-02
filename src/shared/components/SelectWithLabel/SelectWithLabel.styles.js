import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Label = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 6px;
`;

export const StyledSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 6px;

  &.error {
    border: 1px solid rgba(255, 0, 0, 0.5);
  }

  :focus {
    outline: none;
  }
`;

export const RequiredDot = styled.span`
  color: red;
  font-weight: 700;
`;
