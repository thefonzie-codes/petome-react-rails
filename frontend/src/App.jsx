import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";
import Game from "./components/Game";
import StartScreen from "./components/StartScreen";
import { useState, useEffect } from "react";
import TitleScreen from "./components/TitleScreen";
import IntroText from "./components/IntroText";

function App() {
  const { state, dispatch, ACTIONS } = useApplicationData();

  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const onKeyDown = (e) => {
      if(e.key && screen < 2){
        setScreen(screen + 1);
        return
       }

       if(e.key && screen === 2){
        return () => window.removeEventListener('keydown', onKeyDown)
       }
  
       return
     }

    const onClick = (e) => {
      if((e.pointerType === "mouse" || e.pointerType === "touch") && screen < 2){
        setScreen(screen + 1);
        return
       }

       if((e.pointerType === "mouse" || e.pointerType === "touch") && screen === 2){
        return () => window.removeEventListener('click', onClick)
       }
  
       return
     }

   
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('click', onClick)
    return (() => window.removeEventListener('keydown', onKeyDown), () => window.removeEventListener('click', onClick))
   },[screen])

  return (
    <div className="App">
      {(screen === 0 && !state.pets[2]) && <TitleScreen />}
      {(screen === 1 && !state.pets[2]) && <IntroText />}
      {(screen === 2 && !state.pets[2]) && <StartScreen state={state} dispatch={dispatch} ACTIONS={ACTIONS} />}
      {(state.pets[2] && screen === 2) && <Game state={state} dispatch={dispatch} ACTIONS={ACTIONS} />}
      {/* {screen === 0 ?  : <></>}
      {(state.pets[2] && screen === 1) ? (
        <Game state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
      ) : (
        <TitleScreen />
        <StartScreen state={state} dispatch={dispatch} ACTIONS={ACTIONS} /> */}
      {/* )} */}
      <audio id="audio" loop src="http://localhost:3001/audio/Passing Time - Kevin MacLeod -55db.mp3" autoPlay/>
    </div>
  );
}

export default App;
