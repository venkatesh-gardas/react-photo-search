import React from "react";
// Components
import Search from "./components/Search";
// styles
import GlobalStyle from "./GlobalStyle";
import { Wrapper } from "./App.styles";

const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <h1> React Photo Search</h1>
        <Search />
      </Wrapper>
      <GlobalStyle />
    </>
  );
};

export default App;
