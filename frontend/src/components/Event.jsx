import { getById } from "../hooks/helpers";

export default function Event({ state, dispatch, ACTIONS }) {
  const { event: eventId, user, day, energy, pets, events } = state.game;

  // these are ids of events that affect energy and pet mood - they will also contain a petId
  const actionEvents = [6, 7, 8, 9];

  // get petId from event
  const petId = getById(eventId, state.events).petId;
  // get pet object from pet state using petId
  const pet = getById(petId, state.pets);

  const performAction = (option) => (
    <button
      onClick={() => {
        // dispatch action to update pet mood and drain energy
        dispatch({
          type: ACTIONS.PERFORM_ACTION,
          value: { petId: petId, newMood: pet.mood - 1 },
        });
      }}
    >
      {option.text}
    </button>
  );

  const hasEnergy = (option) => (
    <button
      onClick={() => {
        console.log(option.nextEvent);
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
      }}
    >
      {option.text}
    </button>
  );

  const needEnergy = (option) => (
    <button
      onClick={() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 4 });
      }}
    >
      {option.text}{" "}
    </button>
  );

  const noEnergy = (option) => (
    <button
      onClick={() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
        dispatch({ type: ACTIONS.SLEEP });
      }}
    >
      {option.text}
    </button>
  );

  const options = JSON.parse(getById(eventId, state.events).options).map(
    (option) => {
      if (actionEvents.includes(eventId)) {
        return performAction(option);
      } else if (eventId === 4) {
        return noEnergy(option);
      } else if (energy === 0) {
        return needEnergy(option);
      } else {
        return hasEnergy(option);
      }
    }
  );

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
      {/* <p>Pet Mood: {pet.mood}</p> */}
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