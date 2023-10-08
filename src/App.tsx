import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Container } from "./components/layout/Container";
import { LeftSide } from "./components/layout/LeftSide";
import { RightSide } from "./components/layout/RightSide";
import { SearchContainer } from "./components/search/SearchContainer";
import youtube from "./utils/api";

function App() {
  useEffect(() => {
    // youtube.get('/search', {
    //   params: {
    //     q: 'taylor swift',
    //   }
    // }).then(response => {
    //   console.log(response.data)
    //   setSearchList(response.data.items)
    // })
  }, []);

  return (
    <>
      <Header />
      <Container>
        <LeftSide>
          <SearchContainer />
        </LeftSide>
        <RightSide>
          <div>Thing</div>
        </RightSide>
      </Container>
    </>
  );
}

export default App;
