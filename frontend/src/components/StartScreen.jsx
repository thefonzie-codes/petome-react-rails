import { createGame } from "../hooks/helpers";
import "../styles/StartScreen.scss";
import { useState, useEffect } from "react";
import intro from "../assets/intro";
import Typerwriter from "./Typewriter";

export default function StartScreen(props) {

  const [run, setRun] = useState(false);
  
    useEffect(() => {
      const onKeyDown = (e) => {
        if(e.key === '~'){
          setRun(true);
          return;
       }
       
       setTimeout(setRun(false), 5000)
       return;
      }

      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown)
     },[run])

  const { state, dispatch, ACTIONS } = props;

  const [user, setUser] = useState("");

  return (
    <header className="StartScreen">
      <div className="StartScreen-container">
        {/* <h1 className="welcome">Welcome to Petome!</h1>
      <p className="intro">
        <Typerwriter text={intro} delay={25} infinite={Infinity}/>
      </p> */}
        <img
          src={
            "https://petome-backend-production.up.railway.app/images/sprites/slime_neutral.png"
          }
          className="mascot"
        />
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            createGame(document.getElementById("player").value, dispatch);
          }}
        >
          <input
            id="player"
            type="text"
            label="player"
            placeholder="What's your name?"
            maxLength="12"
            value={user}
            onChange={(evt) => {
              setUser(evt.target.value);
            }}
          ></input>
          <button className="new-game" type="submit">
            New Game
          </button>
        </form>
        <img
          src={require("../assets/images/horse.png")}
          className={run ? "horse run" : "horse"}
        />
      </div>
    </header>
  );
}
