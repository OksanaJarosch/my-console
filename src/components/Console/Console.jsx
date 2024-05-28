import { useState } from "react";
import { StyledBtn, StyledFlex, StyledLine } from "../../reusable.styled";
import { StyledCommandLine } from "./Console.styled";

export const Console = () => {
    const [lines, setLines] = useState(["yourname@your_computer=>"]);
    const [inputText, setInputText] = useState("");

    const onKeyPress = e => {
        if (e.charCode === 13) {
            setLines([...lines, "yourname@your_computer=>"])
        }
    };

    const onClear = () => {
        setLines(["yourname@your_computer=>"]);
        setInputText("");
    };

    const onChange = e => {
        setInputText(e.target.value);
    }

    return (
        <StyledFlex>
            <StyledFlex direction="row">
                <StyledFlex margin="0 12px">
                    {lines.map((line, index) => <StyledLine key={index}>{line}</StyledLine>)}
                </StyledFlex>
                <StyledCommandLine onKeyPress={onKeyPress} value={inputText} onChange={onChange}/>
            </StyledFlex>
            <StyledBtn align="flex-end" outlined onClick={onClear}>Clear</StyledBtn>
        </StyledFlex>
    )
};