import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 42px);
  width: 100%;

  @media (min-width: 860px) and (min-height: 570px) {
    height: calc(40% - 42px);
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const StatsBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 150px;
  margin: 8px 0 8px 0;
  padding: 15px;
  border-radius: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);

  @media (min-width: 860px) and (min-height: 570px) {
    height: 80%;
    width: 30%;
    min-width: 150px;
    margin: 15px;
    padding: 5px;
  }

  &.active {
    background-color: #a1d2ff;
  }

  &.finished {
    background-color: #9ed989;
  }

  &.today {
    background-color: #bdcad3;
  }
`;

export const StatsTitle = styled.p`
  font-size: 24px;
  margin: auto;
  text-align: center;
  font-weight: bold;
  @media (min-width: 860px) and (min-height: 570px) {
    margin: 0;
  }
`;

export const StatsNumber = styled.p`
  font-size: 32px;
  margin: auto;
  text-align: center;
  font-weight: bold;
  @media (min-width: 860px) and (min-height: 570px) {
    margin: 0;
  }
`;

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  div {
    margin-right: 10%;
  }

  h3 {
    margin-top: 24px;
    font-weight: 400;
  }

  @media (min-width: 860px) and (min-height: 570px) {
    width: 50%;
    height: 100%;
    border-right: 1px solid grey;
    h3 {
      margin-top: 16px;
      font-weight: 400;
    }
  }
`;

export const BarNotesSection = styled.div`
  height: 100%;
  @media (min-width: 860px) and (min-height: 570px) {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    height: 58%;
  }
`;

export const NotesContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const TopPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  @media (min-width: 1100px) and (min-height: 570px) {
    flex-direction: row;
    width: 100%;
    margin: 40px 0;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;

  h1 {
    text-align: center;
    p {
      margin: 0;
      padding: 0;
      color: #5ac8fa;
    }
  }
  h2 {
    text-align: justify;
    width: 80%;
    margin: 0 auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    a {
      text-decoration: none;
      font-size: 16px;
      color: #5ac8fa;
    }
  }
`;
