import { getById } from "../hooks/helpers";

export default function Game(props) {

  const { state, dispatch, ACTIONS } = props;

  const {
    event: eventId,
    user,
    day,
    energy,
    pets,
    event
    } = state.game;


  return <div className="game">
    <p>Event: {eventId}</p>
    <button onClick={() => dispatch({ type: ACTIONS.SET_EVENT_DATA, value: eventId + 1 })}>Next</button>
    <button onClick={() => dispatch({ type: ACTIONS.SET_EVENT_DATA, value: 2 })}>Click Me</button>
    <p>{getById(1, state.event).dialogue}</p>
    <p>User: {user}</p>
    <p>Day: {day}</p>
    <p>Energy: {energy}</p>
    <button onClick={() => dispatch({ type: ACTIONS.SLEEP })}>Sleep</button>
    game
  </div>;
}