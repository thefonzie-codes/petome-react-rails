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
      console.log('in reducer:', action.value)
      return { ...state, event: action.value };

    case 'SET_USER_DATA':
      return { ...state, user: action.value };

    case 'SET_DAY_DATA':
        return { ...state, day: action.value };

    case 'SET_ENERGY_DATA':
      return { ...state, game: {...state.game, energy: action.value }};

    case 'SET_GAME_DATA':
        return { ...state, game: action.value};
        
    default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    )
  }
}