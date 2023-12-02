import { useReducer } from "react";
import { reducer, ACTIONS } from "./reducer";

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
