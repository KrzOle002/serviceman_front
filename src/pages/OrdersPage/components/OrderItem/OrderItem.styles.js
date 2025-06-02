import styled from "styled-components";
import Button from "../../../../shared/components/Button/Button";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  &.active {
    background-color: #f2e7c0;
  }

  &.finished {
    background-color: #69d974;
  }

  &.late {
    background-color: #fe8081;
  }
`;

export const Data = styled.div`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  width: 100px;
`;
