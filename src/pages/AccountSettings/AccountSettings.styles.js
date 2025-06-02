import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 42px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 860px) and (min-height: 570px) {
    align-items: flex-start;
  }
`;

export const ControlButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
  padding: 18px 0;
  @media (min-width: 860px) and (min-height: 570px) {
    flex-direction: row;
    column-gap: 20px;
    width: 200px;
    margin-left: auto;
    padding: 0;
  }
`;
export const Settings = styled.div`
  width: 100%;
  @media (min-width: 860px) and (min-height: 570px) {
    width: 50%;
    margin-top: 12px;
  }
`;
