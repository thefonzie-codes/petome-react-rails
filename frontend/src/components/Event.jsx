import {
  getById,
  adoptedPet,
  showReaction,
  getBySpecies,
  createGame,
} from "../hooks/helpers";
import "../styles/Event.scss";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Reaction from "./Reaction";

export default function Event({ state, dispatch, ACTIONS }) {
  const { event: eventId, user, day, energy, pets, events } = state.game;

  const [isEntering, setIsEntering] = useState(true);
  const [isReacting, setIsReacting] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  const fadeIn = () => {
    setIsEntering((v) => !v);
    setTimeout(() => (setIsEntering((v) => !v), 700));
  };

  const react = () => {
    setIsReacting((v) => !v);
    setTimeout(() => (setIsReacting(true), 2000));
  };

  // get petId from event
  const event = getById(eventId, state.events);
  const petId = event.species
    ? getBySpecies(event.species, state.pets).id
    : null;
  console.log("petId:", petId);
  // const petSpecies = getBySpecies(event.species, state.pets);
  // get pet object from pet state using petId
  const pet = adoptedPet(state.pets) || getById(petId, state.pets);
  // get sprite from petId
  const sprite = () => {
    if (pet.mood <= 4) {
      return pet.pet_sad;
    } else if (pet.mood <= 9 || eventId >= 29) {
      return pet.pet_neutral;
    } else {
      return pet.pet_happy;
    }
  };
  // console.log(sprite)

  // play with pet
  const performAction = (option) => (
    <button
      className="option"
      onClick={() => {
        react();
        setLastAction(pet[option.actionLabel]);
        // dispatch action to update pet mood and drain energy
        dispatch({
          type: ACTIONS.PERFORM_ACTION,
          value: {
            petId: petId,
            newMood: pet.mood + pet[option.actionLabel],
            nextEvent: option.nextEvent,
          },
        });
      }}
    >
      {option.text}
    </button>
  );

  // onclick, move to next event
  const hasEnergy = (option) => (
    <button
      className={option.text === "next" ? "next" : "option"}
      onClick={() => {
        fadeIn();
        setLastAction(null);
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
      }}
      onKeyUp={() => {
        fadeIn();
        setLastAction(null);
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
      }}
    >
      {option.text}
    </button>
  );

  const sleep = (option) => (
    <button
      className="option"
      onClick={() => {
        fadeIn();
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
        dispatch({ type: ACTIONS.SLEEP });
      }}
    >
      {option.text}
    </button>
  );

  const newGame = (option) => (
    <button
      className="option"
      onClick={() => {
        createGame(state.game.user, dispatch);
      }}
    >
      {option.text}
    </button>
  );

  const options = JSON.parse(event.options).map((option) => {
    // if event is sleep event, sleep
    if (eventId === 27) {
      return sleep(option);
      // if energy is drained, send to sleep event
    } else if (energy === 0) {
      setTimeout(() => dispatch({ type: ACTIONS.NEXT_EVENT, value: 27 }), 1000);
      // if event is an action event, perform action
    } else if (option.actionLabel) {
      return performAction(option);
      // if pet mood reaches
    } else if (
      (eventId === 24 || eventId === 25 || eventId === 26) &&
      pet.mood >= 16
    ) {
      setTimeout(() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 29 });
      }, 1000);
    } else if (eventId === 31 && pet.species === "Wolf") {
      setTimeout(() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 32 });
      }, 3000);
    } else if (eventId === 31 && pet.species === "Cat") {
      setTimeout(() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 33 });
      }, 3000);
    } else if (eventId === 31 && pet.species === "Slime") {
      setTimeout(() => {
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 34 });
      }, 3000);
    } else if (eventId === 38) {
      return newGame(option);
    } else {
      return hasEnergy(option);
    }
  });

  return (
    <CSSTransition in={isEntering} duration={700} classNames="event-contents">
      <div className="event">
        <Reaction
          isReacting={isReacting}
          lastAction={lastAction}
          eventId={eventId}
        />
        {petId && <img className="sprite" src={sprite()} />}
        <div className="event-box">
          <p>{getById(eventId, state.events).dialogue}</p>
          <div className="options-container">{options}</div>
        </div>
      </div>
    </CSSTransition>
  );
}
