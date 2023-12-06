import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";
import Game from "./components/Game";
import StartScreen from "./components/StartScreen";
import { useState, useEffect } from "react";
import TitleScreen from "./components/TitleScreen";
import IntroText from "./components/IntroText";
import { useSound } from "use-sound";
import mySound from './assets/audio/Passing Time - Kevin MacLeod -55db.mp3' // Your sound file path here

function App() {
  const { state, dispatch, ACTIONS } = useApplicationData();

  const [screen, setScreen] = useState(0);

  const [playSound] = useSound(mySound, { volume : 0.2 });

  const userClick = (e) => {
    if (
      (e.pointerType === "mouse" ||
        e.pointerType === "touchstart" ||
        e.pointerType === "touch") &&
      screen < 3
    ) {
      setScreen(screen + 1);
      return;
    }

    if (
      (e.pointerType === "mouse" ||
        e.pointerType === "touchstart" ||
        e.pointerType === "touch") &&
      screen === 3
    ) {
      return () =>
        window.removeEventListener('click' || 'touchstart', userClick);
    }

    return;
  };

  useEffect(() => {   
    // window.addEventListener('keydown', onKeyDown)
    window.addEventListener('click' || 'touchstart', userClick)
    return () => window.removeEventListener('click' || 'touchstart', userClick)
   },[screen])

  return (
    <div className="App">
      <span onClick={(e) => userClick(e)} className="span" id="span" ></span>
      {playSound()}
      {(screen === 1 || screen === 0) && !state.pets[2] && (
        <TitleScreen screen={screen} />
      )}
      {screen === 2 && !state.pets[2] && <IntroText />}
      {screen === 3 && !state.pets[2] && (
        <StartScreen state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
      )}
      {state.pets[2] && screen === 3 && (
        <Game state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
      )}
      {/* {screen === 0 ?  : <></>}
      {(state.pets[2] && screen === 1) ? (
        <Game state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
      ) : (
        <TitleScreen />
        <StartScreen state={state} dispatch={dispatch} ACTIONS={ACTIONS} /> */}
      {/* )} */}
    </div>
  );
}

export default App;
