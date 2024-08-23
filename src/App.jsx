import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';

const GlobalStyled = createGlobalStyle`
  html, body{
    margin  : 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Home />
    </>
  );
}

export default App;
