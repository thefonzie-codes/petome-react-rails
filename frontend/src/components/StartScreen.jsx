import { createGame } from "../hooks/helpers";
import "../styles/StartScreen.scss";
import { useState } from "react";
import intro from "../assets/intro";
import Typerwriter from "./Typerwriter";

export default function StartScreen(props) {

  const { state, dispatch, ACTIONS } = props;

  const [user, setUser] = useState("");

  return (
    <header className="App-header">
      <h1 className="welcome">Welcome to Petome!</h1>
      <p className="intro">
        <Typerwriter text={intro} delay={25} infinite={Infinity} />
      </p>
      <img
        src={
          "http://petome-backend-production.up.railway.app/images/sprites/slime_neutral.png"
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
    </header>
  );
}
