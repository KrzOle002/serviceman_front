import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  color: white;
  position: fixed;
`;

export const TopNav = styled.div`
  background-color: #242830;
  box-sizing: border-box;
  height: 60px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 10px 0 10px;

  .active {
    background-color: #daebea;
    color: #242830;
    border-radius: 5px;
  }
`;

export const Title = styled.p`
  margin-left: 24px;
  font-size: 18px;
`;

export const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 32px;
  }
`;

export const AccountIconContainer = styled(NavLink)`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  svg {
    font-size: 32px;
  }
`;

export const NavMenu = styled.div`
  box-sizing: border-box;
  width: 50vw;
  height: calc(100vh - 60px);
  background-color: #242830;
  transform: translate(-50vw, 0);
  transition: linear 0.15s;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;

  &.active {
    transform: translate(0, 0);
  }

  .active {
    background-color: #daebea;
    color: #242830;
  }
`;

export const NavMenuItem = styled(NavLink)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 0 0 15px 0;
  padding: 0px 5px 0 5px;
  color: white;
  text-decoration: none;

  .text {
    margin-left: 10px;
  }

  &.lastElement {
    margin-top: auto;
  }

  &:hover {
    background-color: #daebea;
  }
`;
