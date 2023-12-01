import {
  getById,
  adoptedPet,
  getBySpecies,
  createGame,
  eventTransition,
} from "../hooks/helpers";
import "../styles/Event.scss";
import { CSSTransition } from "react-transition-group";
import Reaction from "./Reaction";

export default function Event({ state, dispatch, ACTIONS }) {
  const { event: eventId, user, energy, isEntering, isReacting, lastAction, dayActions } = state.game;


  const fadeIn = () => {
    dispatch({
      type: ACTIONS.SET_IS_ENTERING,
      value: (isEntering) => !isEntering,
    });
    return setTimeout(() => {
      dispatch({
        type: ACTIONS.SET_IS_ENTERING,
        value: (isEntering) => !isEntering,
      })}, 700
    );
  };

  // pet reaction to events
  const react = () => {
    console.log("reacting", isReacting);
    dispatch({
      type: ACTIONS.SET_IS_REACTING,
      value: true,
    });
    return setTimeout(() => {
        dispatch({
          type: ACTIONS.SET_IS_REACTING,
          value: false,
        })}, 1000);
  };

  // get event object from event state
  const event = getById(eventId, state.events);
  // get petId from event species column
  const petId = event.species
    ? getBySpecies(event.species, state.pets).id
    : null;

  // get pet object from pet state using adoptedPet or petId
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

  // set the day action to the event action

  // play with pet (action options)
  const performAction = (option) => (
    <button
      className="option"
      onClick={() => {
        if (!dayActions.includes(option.text)) {
          // fade in pet reaction to action
          react();
          // set last action to this action label (for reaction)
          dispatch({
            type: ACTIONS.SET_LAST_ACTION,
            value: pet[option.actionLabel],
          });
          // dispatch action to update pet mood and drain energy
          dispatch({
            type: ACTIONS.PERFORM_ACTION,
            value: {
              petId: petId,
              newMood: pet.mood + pet[option.actionLabel],
              nextEvent: option.nextEvent,
            },
          });
          // dispatch action to add action to day actions
          dispatch({
            type: ACTIONS.SET_DAY_ACTIONS,
            value: [...dayActions, option.text],
          });
        }
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
        // fix bug where reaction stays on screen
        dispatch({
          type: ACTIONS.SET_LAST_ACTION,
          value: null,
        });
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
      }}
      onKeyUp={() => {
        fadeIn();
        dispatch({
          type: ACTIONS.SET_LAST_ACTION,
          value: null,
        });
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
      }}
    >
      {option.text}
    </button>
  );

  // onclick, cause sleep ACTION
  const sleep = (option) => (
    <button
      className="option"
      onClick={() => {
        fadeIn();
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
        dispatch({ type: ACTIONS.SLEEP });
        // dispatch action to clear day actions
        dispatch({
          type: ACTIONS.SET_DAY_ACTIONS,
          value: [],
        });
      }}
    >
      {option.text}
    </button>
  );

  // onclick, create new game using same player name
  const transition = (option) => (
    <button className="option no-click">{option.text}</button>
  );

  const newGame = (option) => (
    <button
      className="option"
      onClick={() => {
        createGame(user, dispatch);
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
      eventTransition(dispatch, 27, 2400);
      return transition(option);
      // if event is an action event, perform action
    } else if (option.actionLabel) {
      return performAction(option);
      // if pet mood reaches 16, send to specific pet success event
    } else if (
      (eventId === 24 || eventId === 25 || eventId === 26) &&
      pet.mood >= 16
    ) {
      eventTransition(dispatch, 29, 200);
    } else if (eventId === 31 && pet.species === "Wolf") {
      eventTransition(dispatch, 32, 3000);
    } else if (eventId === 31 && pet.species === "Cat") {
      eventTransition(dispatch, 33, 3000);
    } else if (eventId === 31 && pet.species === "Slime") {
      eventTransition(dispatch, 34, 3000);
      // if event is restart? event, create new game
    } else if (eventId === 38) {
      return newGame(option);
      // otherwise, the player has energy, so move to next event
    } else {
      return hasEnergy(option);
    }
  });

  return (
    <CSSTransition in={isEntering} duration={1200} classNames="event-contents">
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
