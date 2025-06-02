import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  column-gap: 10px;
  padding: 10px 0 10px 0;
  width: 90%;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const CancelIconContainer = styled.div`
  svg {
    fill: #242830;
    font-size: 32px;
    transition: 0.3s;
  }

  @media (min-width: 860px) and (min-height: 570px) {
    svg {
      :hover {
        fill: #b22222;
        cursor: pointer;
      }
    }
  }
`;

export const Description = styled.div`
  p {
    display: block;
    margin: 0.5px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    ::first-letter {
      text-transform: capitalize;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
