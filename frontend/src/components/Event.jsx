import {
  getById,
  adoptedPet,
  getBySpecies,
  createGame,
  dispatchTimeout,
  applyDispatch,
  fadeIn,
  react,
} from "../hooks/helpers";
import "../styles/Event.scss";
import { CSSTransition } from "react-transition-group";
import Reaction from "./Reaction";

export default function Event({ state, dispatch, ACTIONS }) {
  const {
    event: eventId,
    user,
    energy,
    isEntering,
    isReacting,
    lastAction,
    dayActions,
  } = state.game;

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
  const performAction = (option) => {
    if (!dayActions.includes(option.text)) {
      return (<button
        className="option"
        onClick={() => {
          if (!dayActions.includes(option.text)) {
            // fade in pet reaction to action
            react(dispatch);
            // set last action to this action label (for reaction)
            applyDispatch(dispatch, ACTIONS.SET_GAME_STATE, {
              key: "lastAction",
              value: pet[option.actionLabel],
            });
            // dispatch action to update pet mood and drain energy
            applyDispatch(dispatch, ACTIONS.PERFORM_ACTION, {
              petId: petId,
              newMood: pet.mood + pet[option.actionLabel],
              nextEvent: option.nextEvent,
            });
            // dispatch action to add action to day actions
            applyDispatch(dispatch, ACTIONS.SET_GAME_STATE, {
              key: "dayActions",
              value: [...dayActions, option.text],
            });
          }
        }}
      >
        {option.text}
      </button>
      );
    };
    return (<button className="option option-null">{option.text} </button>);
  };

  // onclick, move to next event
  const hasEnergy = (option) => (
    <button
      className={option.text === "next" ? "next" : "option"}
      onClick={() => {
        fadeIn(dispatch);
        // fix bug where reaction stays on screen
        applyDispatch(dispatch, ACTIONS.SET_GAME_STATE, {
          key: "lastAction",
          value: null,
        });
        applyDispatch(dispatch, ACTIONS.NEXT_EVENT, option.nextEvent);
      }}
    >
      {option.text}
    </button>
  );
  const successEventOptions = (option, eventId) => {
    return (<button
      className={option.text === "next" ? "next" : "option"}
      onClick={() => {
        applyDispatch(dispatch, ACTIONS.NEXT_EVENT, eventId);
      }}
    >
      {option.text}
    </button>
    );
  };

  // onclick, cause sleep ACTION
  const sleep = (option) => (
    <button
      className="option"
      onClick={() => {
        fadeIn(dispatch);
        applyDispatch(dispatch, ACTIONS.NEXT_EVENT, option.nextEvent);
        dispatch({ type: ACTIONS.SLEEP });
        // dispatch action to clear day actions
        applyDispatch(dispatch, ACTIONS.SET_GAME_STATE, {
          key: "dayActions",
          value: [""],
        });
      }}
    >
      {option.text}
    </button>
  );

  // onclick, create new game using same player name
  const transition = (option) => (
    <button className="option option-null">{option.text}</button>
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
      dispatchTimeout(dispatch, ACTIONS.NEXT_EVENT, 27, 1000);
      return transition(option);
      // if event is an action event, perform action
    } else if (option.actionLabel) {
      return performAction(option);
      // if pet mood reaches 16, send to specific pet success event
    } else if (
      (eventId === 24 || eventId === 25 || eventId === 26) &&
      pet.mood >= 16
    ) {
      dispatchTimeout(dispatch, ACTIONS.NEXT_EVENT, 29, 1000);
    } else if (eventId === 31 && pet.species === "Wolf") {
      return successEventOptions(option, 32,);
    } else if (eventId === 31 && pet.species === "Cat") {
      return successEventOptions(option, 33,);
    } else if (eventId === 31 && pet.species === "Slime") {
      return successEventOptions(option, 34,);
      // if event is restart? event, create new game
    } else if (eventId === 38) {
      return newGame(option);
      // otherwise, the player has energy, so move to next event
    } else {
      return hasEnergy(option);
    }
  });

  return (
    <CSSTransition in={isEntering} timeout={2000} classNames="event-contents">
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
