import { getById } from "../hooks/helpers";
import Event from "./Event";
import UserStats from "./UserStats";
import "../styles/Game.scss"
import MoodBar from "./MoodBar";

export default function Game(props) {

  const { state, dispatch, ACTIONS } = props;

  const {
    event: eventId,
    user,
    day,
    energy,
    pets,
    } = state.game;

  const event = getById(eventId, state.events);

  return <div className="game" style={{backgroundImage: `url(${event.img})`, backgroundSize: "cover"}}>
    {/* <MoodBar pet={getById(1, state.pets)}/> */}
    { eventId > 23 && <MoodBar pets={state.pets}/> }
    { eventId > 23 && <UserStats game={state.game} dispatch={dispatch} ACTIONS={ACTIONS}/>}
    <Event state={state} dispatch={dispatch} ACTIONS={ACTIONS}/>
    <audio id="audio" loop src="http://localhost:3001/music/Passing Time - Kevin MacLeod.mp3" autoPlay/>
  </div>;
}