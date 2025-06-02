import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const CompanyAdd = styled.div`
   
    height: 100%;
    width: 100%;
`;

export const CompaniesData = styled.div`
    border: 1px gray solid;
    box-sizing: border-box;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
`;

export const CompanyOptions = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
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
