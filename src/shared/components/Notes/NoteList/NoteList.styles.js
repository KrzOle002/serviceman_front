import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media (min-width: 860px) and (min-height: 570px) {
    height: 90%;
    width: 70%;
  }
`;
export const TopLayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px 0;
  position: relative;
`;

export const SearchBar = styled.input`
  height: 26px;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 70%;
  padding: 0 10px;
  margin-right: 10px;
`;

export const AddButton = styled.button`
  background: #0288d1;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border: 0px;
  color: white;
  padding: 8px 0;
  width: 25%;
  font-weight: 700;
  transition: 0.5s;
  :hover {
    cursor: pointer;
    background: #014c75;
  }
  @media (min-width: 860px) and (min-height: 570px) {
    max-width: 120px;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  overflow-y: scroll;
  height: calc(100vh - 180px);
  width: 100%;

  h4 {
    text-align: center;
    font-weight: 400;
  }
`;
