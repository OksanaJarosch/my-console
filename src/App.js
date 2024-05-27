import { Console } from "./components/Console/Console";
import { TextContainer } from "./components/TextContainer/TextContainer";
import { AppWrapper, StyledBtn, StyledFlex } from "./reusable.styled";

function App() {
  return (
    <AppWrapper>
        <TextContainer />
        <StyledFlex>
          <Console />
          <StyledBtn align="flex-end" outlined>Enter</StyledBtn>
        </StyledFlex>
    </AppWrapper>
  );
}

export default App;