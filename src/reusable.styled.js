import styled from "styled-components";

export const AppWrapper = styled.div`
    width: 100%;;
    min-height: 100vh;
    padding: 2rem;
    color: green;
`;

export const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
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
    }
    align-self: ${props => props.align || "stretch"};
`;