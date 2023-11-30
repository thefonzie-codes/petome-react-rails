import { getById } from "../hooks/helpers";
import Event from "./Event";
import UserStats from "./UserStats";
import "../styles/Game.scss";
import MoodBar from "./MoodBar";

export default function Game(props) {
  const { state, dispatch, ACTIONS } = props;

  const { event: eventId, user, day, energy, pets } = state.game;

  const event = getById(eventId, state.events);
  // const lastEventId = eventId - 1;
  // const lastEvent = getById(lastEventId, state.events);
  // console.log(lastEvent);

  return (
    <div
      className="game"
      style={{ backgroundImage: `url(${event.img})`, backgroundSize: "cover" }}
    >
      <>
      { (eventId === 24 || eventId === 25 || eventId === 26) && <MoodBar pets={state.pets} /> }
      { (eventId === 24 || eventId === 25 || eventId === 26) && <UserStats game={state.game} dispatch={dispatch} ACTIONS={ACTIONS} /> }
      </>
      <Event state={state} dispatch={dispatch} ACTIONS={ACTIONS} />
    </div>
  );
}
