import { getById } from "../hooks/helpers";
import { useState, useEffect } from "react";
import Event from "./Event";
import UserStats from "./UserStats";
import "../styles/Game.scss";
import MoodBar from "./MoodBar";

export default function Game(props) {
  const { state, dispatch, ACTIONS } = props;

  const { event: eventId } = state.game;

  const event = getById(eventId, state.events);

  const [fadeIn, setFadeIn] = useState(false);
  const [bg, setBg] = useState(event.img);

  useEffect(() => {
    setFadeIn(true);
    setBg(prevBg => prevBg !== event.img && event.img);

    setTimeout(() => {
      setFadeIn(false);
    }, 3000);
  }, bg);

  return (
    <div
      className={fadeIn ? "game" : "game fade-in"}
      style={{ backgroundImage: `url(${event.img})`, backgroundSize: "cover"}}
    >
      {/* <img className="background" src={event.img}/> */}
      <>
      { (eventId === 24 || eventId === 25 || eventId === 26) && <MoodBar event={event} pets={state.pets} /> }
      { (eventId === 24 || eventId === 25 || eventId === 26) && <UserStats game={state.game} dispatch={dispatch} ACTIONS={ACTIONS} /> }
      </>
      <Event state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
    </div>
  );
}
