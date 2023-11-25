import { useReducer } from "react";
import { reducer, ACTIONS } from "./reducer";
import { pets } from "../mocks/pets";
import { getById } from "./helpers";
import { events } from "../mocks/event";

export default function useApplicationData() { 

  const initialState = {
    event: 1,
    user: "Moi",
    day: 0,
    energy: 5,
    pets: [getById(1, pets), getById(2, pets), getById(3, pets)],
    events: events
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return { 
    state, 
    dispatch,
    ACTIONS
  }
}