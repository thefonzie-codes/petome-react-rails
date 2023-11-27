import { getById } from "../hooks/helpers";

export default function Event({ state, dispatch, ACTIONS }) {

  const {
    event: eventId,
    user,
    day,
    energy,
    pets,
    events
    } = state.game;

    const options = JSON.parse(getById(eventId, state.events).options).map(option => <button onClick={() => {
      console.log(option.nextEvent); 
      dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
      dispatch({ type: ACTIONS.SET_ENERGY_DATA, value: energy + option.energy });
    }}>{option.text}</button>);

  return (
    <div className="event">
      <p>Event: {eventId}</p>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.NEXT_EVENT, value: eventId + 1 })
        }
      >
        Next
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.NEXT_EVENT, value: 1 })}>
        Reset to 1
      </button>
      {options}
      <p>{getById(eventId, state.events).dialogue}</p>
      <p>Energy: {energy}</p>
      <button onClick={() => dispatch({ type: ACTIONS.SLEEP })}>Sleep</button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.SET_ENERGY_DATA, value: energy - 1 })
        }
      >
        Burn energy
      </button>
    </div>
  );
}