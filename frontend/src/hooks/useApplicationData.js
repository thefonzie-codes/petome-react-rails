import { useReducer } from "react";
import { reducer, ACTIONS } from "./reducer";
import { pets } from "../mocks/pets";
import { getById } from "./helpers";
import { events } from "../mocks/event";

export default function useApplicationData() {
  const initialState = {
    game: {},
    events: {},
    pets: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
    ACTIONS,
  };
}
