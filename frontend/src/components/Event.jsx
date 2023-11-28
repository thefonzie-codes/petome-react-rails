import { getById } from "../hooks/helpers";
import "../styles/Event.scss";

export default function Event({ state, dispatch, ACTIONS }) {
  const { event: eventId, user, day, energy, pets, events } = state.game;

  // these are ids of events that affect energy and pet mood - they will also contain a petId
  const actionEvents = [6, 7, 8, 9];

  // get petId from event
  const petId = getById(eventId, state.events).petId;
  // get pet object from pet state using petId
  const pet = getById(petId, state.pets);
  // get pet mood from pet object
  const event = getById(eventId, state.events);

  // play with pet
  const performAction = (option) => (
    <button className="option"
      onClick={() => {
        // dispatch action to update pet mood and drain energy
        dispatch({
          type: ACTIONS.PERFORM_ACTION,
          value: { petId: petId, newMood: pet.mood - (pet[option.actionLabel]), nextEvent: option.nextEvent },
        });
      }}
    >
      {option.text}
    </button>
  );
  
  // onclick, move to next event
  const hasEnergy = (option) => (
    <button className="option"
      onClick={() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
      }}
    >
      {option.text}
    </button>
  );
  
  // onclick, send user to sleep event #4
  const needEnergy = (option) => (
    <button className="option"
      onClick={() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 27 });
      }}
    >
      {option.text}
    </button>
  );

  const noEnergy = (option) => (
    <button className="option"
      onClick={() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
        dispatch({ type: ACTIONS.SLEEP });
      }}
    >
      {option.text}
    </button>
  );

  const options = JSON.parse(event.options).map(
    (option) => {
      if (eventId === 27) {
        return noEnergy(option);
      } else if (energy === 0) {
        return needEnergy(option);
      } else if (event.petId) {
        return performAction(option);
      } else {
        return hasEnergy(option);
      }
    }
  );

  return (
    <div className="event">
      <p>Event: {eventId}</p>
      <p>{getById(eventId, state.events).dialogue}</p>
      <div className="options-container">
        {options}
        {petId && <p>mood: {pet.mood}</p>}
      </div>
    </div>
  );
}