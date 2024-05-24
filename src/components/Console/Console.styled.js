import styled from "styled-components";

export const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${props => props.color || "white"};
    &:focus {
        outline: none;
    }
`;