import { getById } from "../hooks/helpers";
import "../styles/Event.scss";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
// import sprite from '../mocks/sprites/neko.png';


export default function Event({ state, dispatch, ACTIONS }) {
  const { event: eventId, user, day, energy, pets, events } = state.game;

  const [isEntering, setIsEntering] = useState(true);

  const fadeIn = () => {
    setIsEntering(v => !v);
    setTimeout(() => (setIsEntering(v => !v), 700));
  };

  // these are ids of events that affect energy and pet mood - they will also contain a petId
  const actionEvents = [6, 7, 8, 9];

  // get petId from event
  const petId = getById(eventId, state.events).petId;
  // get pet object from pet state using petId
  const pet = getById(petId, state.pets);
  // get pet mood from pet object
  const event = getById(eventId, state.events);
  // get sprite from petId
  // const sprite = pet.pet_neutral;
  // console.log(sprite)


  // play with pet
  const performAction = (option) => (
    <button className="option"
      onClick={() => {
        fadeIn();
        // dispatch action to update pet mood and drain energy
        dispatch({
          type: ACTIONS.PERFORM_ACTION,
          value: { petId: petId, newMood: pet.mood + (pet[option.actionLabel]), nextEvent: option.nextEvent },
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
        fadeIn();
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
        fadeIn();
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 27 });
      }}
    >
      {option.text}
    </button>
  );

  const noEnergy = (option) => (
    <button className="option"
      onClick={() => {
        fadeIn();
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
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 27});
        // return needEnergy(option);
      } else if (option.actionLabel) {
        return performAction(option);
      } else {
        return hasEnergy(option);
      }
    }
  );

  return (
    <CSSTransition
      in={isEntering}
      duration={700}
      classNames="event-contents">
    <div className="event">
      {petId && <img className="sprite" src={pet.pet_neutral} />}
      <div className="event-box">
        <p>Event: {eventId}</p>
        <p>{getById(eventId, state.events).dialogue}</p>
        <div className="options-container">
          {options}
          {/* {petId && <p>mood: {pet.mood}</p>} */}
        </div>
        </div>
      </div>
    </CSSTransition>
  );
}