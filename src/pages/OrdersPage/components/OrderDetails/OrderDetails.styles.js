import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100% - 60px);
  margin-top: 60px;
  background-color: rgba(0, 0, 0, 0.6);
  @media (min-width: 860px) and (min-height: 570px) {
    margin: 0 0 0 140px;
    top: 0;
    left: 0;
    height: 100vh;
    width: calc(100vw - 140px);
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 95%;
  height: 96%;
  background-color: white;
  border-radius: 14px;
  padding: 0 18px;
  @media (min-width: 860px) and (min-height: 570px) {
    width: 97%;
  }
`;

export const OrderHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border-radius: 0 0 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: #f2e7c0;
  }

  &.finished {
    background-color: #69d974;
  }

  &.late {
    background-color: #fe8081;
  }

  svg {
    margin-left: auto;
    font-size: 32px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const TitleText = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  margin-left: auto;
  position: relative;
  left: 14px;
`;

export const OrderInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 60px);
  padding: 8px 8px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media (min-width: 860px) and (min-height: 570px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
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

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
  padding-top: 8px;
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
