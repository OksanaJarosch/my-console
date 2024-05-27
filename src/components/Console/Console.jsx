import { useState } from "react";
import { StyledFlex, StyledLine } from "../../reusable.styled";
import { StyledCommandLine } from "./Console.styled";

export const Console = () => {
    const [lines, setLines] = useState(["yourname@your_computer=>"])
    return (
        <StyledFlex direction="row">
            <StyledFlex margin="0 12px">
                {lines.map((line, index) => <StyledLine key={index}>{line}</StyledLine>)}
            </StyledFlex>
            <StyledCommandLine />
        </StyledFlex>
    )
};