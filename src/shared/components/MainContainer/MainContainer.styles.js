import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
  background-color: #b6c8c9;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 860px) and (min-height: 570px) {
    padding: 0;
    padding-left: 140px;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 96%;
  padding: 15px;
  margin: 10px;
  border-radius: 14px;
  background-color: white;
  overflow-y: auto;
  @media (min-width: 860px) and (min-height: 570px) {
    margin: 25px;
    padding: 25px;
  }
`;
