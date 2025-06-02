import styled from "styled-components";

export const Wrapper = styled.div`
    width: 50px;
    height: 30px;
    padding: 0 5px;
    border-radius: 60px;
    @media (min-width: 860px) and (min-height: 570px) {
        width: 60px;
        height: 35px;
    }

    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 100%;
    @media (min-width: 860px) and (min-height: 570px) {
        width: 25px;
        height: 25px;
    }
`;