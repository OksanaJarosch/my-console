import styled from "styled-components";

export const StyledCommandLine = styled.textarea`
    width: 100%;
    height: 70vh;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${props => props.color || props.theme.colors.secondary};
    &:focus {
        outline: none;
    }
`;