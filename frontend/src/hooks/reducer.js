import { getById } from "./helpers";

export const ACTIONS = {
  SET_EVENT_DATA: "SET_EVENT_DATA",
  SET_PETS_DATA: "SET_PETS_DATA",
  PERFORM_ACTION: "PERFORM_ACTION",
  SLEEP: "SLEEP",
  SET_GAME_DATA: "SET_GAME_DATA",
  NEXT_EVENT: "NEXT_EVENT",
  SET_GAME_STATE: "SET_GAME_STATE",
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_EVENT_DATA":
      return { ...state, events: action.value };

    case "SET_PETS_DATA":
      return { ...state, pets: action.value };

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

    case "SET_GAME_STATE":
      return {
        ...state,
        game: { ...state.game, [action.value.key]: action.value.value },
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
