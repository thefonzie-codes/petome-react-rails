import { pets } from "../mocks/pets";
import axios from 'axios';

export const ACTIONS = {
  SET_EVENT_DATA: 'SET_EVENT_DATA',
  SET_USER_DATA: 'SET_USER_DATA',
  SET_DAY_DATA: 'SET_DAY_DATA',
  SET_ENERGY_DATA: 'SET_ENERGY_DATA',
  SET_PETS_DATA: 'SET_PETS_DATA',
  PERFORM_ACTION: 'PERFORM_ACTION',
  SLEEP: 'SLEEP',
  SET_GAME_DATA: 'SET_GAME_DATA'
}

export function reducer(state, action) {
  switch (action.type) {

    case 'SET_EVENT_DATA':
      return { ...state, event: action.value };

    case 'SET_USER_DATA':
      return { ...state, user: action.value };

    case 'SET_DAY_DATA':
        return { ...state, day: action.value };

    case 'SET_ENERGY_DATA':
      return { ...state, energy: action.value };

    case 'PERFORM_ACTION':
      return { ...state, pets:[...pets, pets[0].mood = action.value], energy: state.energy - 1 };

    case 'SLEEP':
      return { ...state, energy: 5, day: state.day + 1 };

    case 'SET_GAME_DATA':
        return axios.get("/games/1.json")
          .then(res => res.data)
          .then(data => data && console.log(data))
          .catch(err => console.err)
        
    default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    )
  }
}