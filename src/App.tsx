// import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Container } from "./components/layout/Container";
import { LeftSide } from "./components/layout/LeftSide";
import { RightSide } from "./components/layout/RightSide";
import { SearchContainer } from "./components/search/SearchContainer";
import { RotationContainer } from "./components/rotation/RotationContainer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <LeftSide>
          <SearchContainer />
        </LeftSide>
        <RightSide>
          <RotationContainer />
        </RightSide>
      </Container>
    </>
  );
}

export default App;
