import { getById, fetchData, createGame } from "../hooks/helpers";
import intro from "../assets/intro";
import Typerwriter from "./Typerwriter";
import cat from "../mocks/sprites/neko.png";
import background from "../mocks/background/image1_0.png";
import "../styles/StartScreen.scss";
import { useState } from "react";

export default function StartScreen(props) {

  const { state, dispatch, ACTIONS } = props;

  const [user, setUser] = useState("");

  return (
    <header className="App-header" style={{ backgroundImage: `${background}` }}>
      <h1 className="welcome">Welcome to Petome!</h1>
      <p className="intro">
        <Typerwriter text={intro} delay={25} infinite={Infinity}/>
      </p>
      <img src={cat} className="mascot" />
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
        <button className="new-game" type="submit">New Game</button>
      </form>
    </header>
  );
}
