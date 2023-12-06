import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";
import Game from "./components/Game";
import StartScreen from "./components/StartScreen";
import { useState, useEffect } from "react";
import TitleScreen from "./components/TitleScreen";
import IntroText from "./components/IntroText";
import { useSound } from "use-sound";
import mySound from './assets/audio/Passing Time - Kevin MacLeod -55db.mp3' 
import { iOS } from "./hooks/helpers";

function App() {
  const { state, dispatch, ACTIONS } = useApplicationData();

  const [screen, setScreen] = useState(0);

  const [playSound] = useSound(mySound, { volume : 0.2 });

  useEffect(() => {
    // const onKeyDown = (e) => {
    //   if(e.key && screen < 3){
    //     setScreen(screen + 1);
    //     return
    //    }

    //    if(e.key && screen === 3){
    //     return () => window.removeEventListener('keydown', onKeyDown)
    //    }
  
    //    return
    //  }


    const onClick = (e) => {
      if(((e.pointerType === "mouse" || e.pointerType === "touch") || iOS) && screen < 3){
        setScreen(screen + 1);
        return
       }

       if(((e.pointerType === "mouse" || e.pointerType === "touch") || iOS) && screen === 3){
        return () => window.removeEventListener('click', onClick)
       }
  
       return
     }

   
    // window.addEventListener('keydown', onKeyDown)
    playSound()
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
   },[screen])

  return (
    <div className="App">
      {((screen === 1 || screen === 0) && !state.pets[2]) && <TitleScreen screen={screen}/>}
      {(screen === 2 && !state.pets[2]) && <IntroText />}
      {(screen === 3 && !state.pets[2]) && <StartScreen state={state} dispatch={dispatch} ACTIONS={ACTIONS} />}
      {(state.pets[2] && screen === 3) && <Game state={state} dispatch={dispatch} ACTIONS={ACTIONS} />}
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
