import { getById } from "../hooks/helpers";
import "../styles/Event.scss"

export default function Event({ state, dispatch, ACTIONS }) {

  const {
    event: eventId,
    user,
    day,
    energy,
    pets,
    events
    } = state.game;

    const options = JSON.parse(getById(eventId, state.events).option1).map(option => <button className="option">{option.text}</button>);

  return <div className="event">
    <p>Event: {eventId}</p>
    <p>{getById(eventId, state.events).dialogue}</p>
    {/* <button onClick={() => dispatch({ type: ACTIONS.NEXT_EVENT, value: eventId + 1 })}>Next</button>
    <button onClick={() => dispatch({ type: ACTIONS.NEXT_EVENT, value: 1 })}>Reset to 1</button> */}
    <div className="options-container">
    {options}
    </div>
    </div>;
}