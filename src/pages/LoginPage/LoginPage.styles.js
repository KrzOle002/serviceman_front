import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  @media (min-width: 860px) and (min-height: 570px) {
    width: 460px;
    height: 460px;
    padding: 24px;
    border-radius: 8px;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 28px;
  display: block;
  margin: 0;
`;

export const SubTitle = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 22px;
  display: block;
  margin: 8px 0;
`;

export const AppIcon = styled.div`
  svg {
    font-size: 96px;
    color: #242830;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 18px 0;
`;

export const Form = styled.form`
  width: 100%;
`;
