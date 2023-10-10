// import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Container } from "./components/layout/Container";
import { LeftSide } from "./components/layout/LeftSide";
import { RightSide } from "./components/layout/RightSide";
import { SearchContainer } from "./components/search/SearchContainer";
import { RotationContainer } from "./components/rotation/RotationContainer";
import { NowPlaying } from "./components/playing/NowPlaying";
import { NowPlayingTools } from "./components/playing/NowPlayingTools";
import { useRef } from "react";
import { useRotationStore } from "./store/useRotationStore";

function App() {
  const player = useRef();
  const isPlaying = useRotationStore((state) => state.isCurrentPlaying);

  const handleTogglePlay = () => {
    if (player.current) {
      isPlaying ? player.current.pause() : player.current.play();
    }
  };

  const handleSkip = (direction: number) => {
    if (player.current) {
      direction > 0 ? player.current.skipForward() : player.current.skipBack();
    }
  }

  return (
    <>
      <Header />
      <Container>
        <LeftSide>
          <SearchContainer />
          <div className="flex gap-4 justify-between mt-4">
            <NowPlayingTools onTogglePlay={handleTogglePlay} onSkip={handleSkip} />
          </div>
        </LeftSide>
        <RightSide>
          <RotationContainer />
          <div className="mt-4">
            <NowPlaying ref={player} />
          </div>
        </RightSide>
      </Container>
    </>
  );
}

export default App;
