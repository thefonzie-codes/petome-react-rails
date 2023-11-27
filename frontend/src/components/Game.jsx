import { getById } from "../hooks/helpers";
import Event from "./Event";

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
    <p>User: {user}</p>
    <p>Day: {day}</p>
    <p>Energy: {energy}</p>
    <button onClick={() => dispatch({ type: ACTIONS.SLEEP })}>Sleep</button>
    <button onClick={() => dispatch({ type: ACTIONS.SET_ENERGY_DATA, value: energy - 1 })}>Burn energy</button>
  </div>;
}