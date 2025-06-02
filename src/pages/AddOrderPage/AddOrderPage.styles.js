import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 860px) and (min-height: 570px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    min-height: 540px;
    height: calc(100% - 42px);
  }
`;

export const FormGroupContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 0 10px 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  @media (min-width: 860px) and (min-height: 570px) {
    width: 33.33%;
    border-bottom: none;
    padding: 0 12px 4px 12px;
  }
`;

export const FormGroupTitle = styled.p`
  width: 100%;
  margin: 10px 0 0 0;
  color: rgba(0, 0, 0, 0.4);
  @media (min-width: 860px) and (min-height: 570px) {
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
  padding-top: 12px;
  @media (min-width: 860px) and (min-height: 570px) {
    flex-direction: row;
    column-gap: 20px;
    width: 400px;
    height: 42px;
    margin-left: auto;
    margin-top: auto;
    padding: 0;
  }
`;
