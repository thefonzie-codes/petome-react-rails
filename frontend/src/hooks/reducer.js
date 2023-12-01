import { getById } from "./helpers";

export const ACTIONS = {
  SET_EVENT_DATA: "SET_EVENT_DATA",
  SET_USER_DATA: "SET_USER_DATA",
  SET_DAY_DATA: "SET_DAY_DATA",
  SET_ENERGY_DATA: "SET_ENERGY_DATA",
  SET_PETS_DATA: "SET_PETS_DATA",
  PERFORM_ACTION: "PERFORM_ACTION",
  SLEEP: "SLEEP",
  SET_GAME_DATA: "SET_GAME_DATA",
  NEXT_EVENT: "NEXT_EVENT",
  SET_DAY_ACTIONS: "SET_DAY_ACTIONS",
  SET_IS_ENTERING: "SET_IS_ENTERING",
  SET_IS_REACTING: "SET_IS_REACTING",
  SET_LAST_ACTION: "SET_LAST_ACTION",
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_EVENT_DATA":
      return { ...state, events: action.value };

    case "SET_USER_DATA":
      return { ...state, user: action.value };

    case "SET_DAY_DATA":
      return { ...state, day: action.value };

    case "SET_PETS_DATA":
      return { ...state, pets: action.value };

    case "SET_ENERGY_DATA":
      return { ...state, game: { ...state.game, energy: action.value } };

    case "SET_GAME_DATA":
      return { ...state, game: action.value };

    case "PERFORM_ACTION":
      return {
        ...state,
        pets: [
          ...state.pets,
          (getById(action.value.petId ,state.pets).mood = action.value.newMood),
        ],
        game: { ...state.game, energy: state.game.energy - 1 },
      };

    case "NEXT_EVENT":
      return { ...state, game: { ...state.game, event: action.value } };

    case "SLEEP":
      return {
        ...state,
        game: { ...state.game, energy: 5, day: state.game.day + 1 },
      };

    case "SET_DAY_ACTIONS":
      return {
        ...state,
        game: { ...state.game, dayActions: action.value },
      };
    
    case "SET_IS_ENTERING":
      return {
        ...state,
        game: { ...state.game, isEntering: action.value },
      };

    case "SET_IS_REACTING":
      return {
        ...state,
        game: { ...state.game, isReacting: action.value },
      };

    case "SET_LAST_ACTION":
      return {
        ...state,
        game: { ...state.game, lastAction: action.value },
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
