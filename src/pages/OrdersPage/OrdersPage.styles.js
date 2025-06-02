import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchPanel = styled.form`
  display: flex;
  flex-direction: column;
  column-gap: 30px;
  align-items: flex-end;
  width: 100%;
  row-gap: 15px;
  @media (min-width: 860px) and (min-height: 570px) {
    width: 50%;
    min-width: 400px;
    flex-direction: row;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 4px;
  padding: 8px 0;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  transition: 0.5s;
  font-weight: 700;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.46px;
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;
