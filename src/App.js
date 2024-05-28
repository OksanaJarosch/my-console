import { Console } from "./components/Console/Console";
import { TextContainer } from "./components/TextContainer/TextContainer";
import { AppWrapper } from "./reusable.styled";

function App() {
  return (
    <AppWrapper>
        <TextContainer />
        <Console />
    </AppWrapper>
  );
}

export default App;