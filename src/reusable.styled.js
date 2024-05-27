import styled, { css, keyframes } from "styled-components";

export const btnAnimation = keyframes`
    0% {
        transform: scale(1.0);
    };
    50% {
        transform: scale(1.1);
    };
    100% {
        transform: scale(1.0);
    };
`;

export const AppWrapper = styled.div`
    width: 100%;;
    min-height: 100vh;
    padding: 2rem;
    color: #c4b318;
`;

export const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "column"};
    align-items: ${props => props.align || "stretch"};
    justify-content: ${props => props.justify || "stretch"};
    margin: ${props => props.margin || "0"};
`;

export const StyledBtn = styled.button`
    border: none;
    padding: 12px 24px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 8px;
    &:focus {
        outline: none;
    };
    align-self: ${props => props.align || "stretch"};

    ${props => props.outlined && css`
        color: white;
        background-color: transparent;
        border: ${props => props.border || "1px solid #c4b318"}
    `};

    &:hover {
        animation: ${btnAnimation} 1s linear;
    };
`;

export const StyledLine = styled.div`
    font-size: 24px;
    color: ${props => props.color || "#d88d4b"}
`;