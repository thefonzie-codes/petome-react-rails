import { getById } from "../hooks/helpers";
import Event from "./Event";
import UserStats from "./UserStats";

export default function Game(props) {

  const { state, dispatch, ACTIONS } = props;

  const {
    event: eventId,
    user,
    day,
    energy,
    pets,
    events
    } = state.game;


  return <div className="game">
    <Event state={state} dispatch={dispatch} ACTIONS={ACTIONS}/>
    <UserStats game={state.game}/>

    <p>User: {user}</p>
    <p>Day: {day}</p>
  </div>;
}