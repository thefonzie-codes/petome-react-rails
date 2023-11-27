import { getById } from "../hooks/helpers";

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
    <p>Event: {eventId}</p>
    <button onClick={() => dispatch({ type: ACTIONS.NEXT_EVENT, value: eventId + 1 })}>Next</button>
    <button onClick={() => dispatch({ type: ACTIONS.NEXT_EVENT, value: 1 })}>Reset to 1</button>
    <p>{getById(eventId, state.events).dialogue}</p>
    <p>User: {user}</p>
    <p>Day: {day}</p>
    <p>Energy: {energy}</p>
    <button onClick={() => dispatch({ type: ACTIONS.SLEEP })}>Sleep</button>
    game
  </div>;
}