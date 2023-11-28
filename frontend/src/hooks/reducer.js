export const ACTIONS = {
  SET_EVENT_DATA: 'SET_EVENT_DATA',
  SET_USER_DATA: 'SET_USER_DATA',
  SET_DAY_DATA: 'SET_DAY_DATA',
  SET_ENERGY_DATA: 'SET_ENERGY_DATA',
  SET_PETS_DATA: 'SET_PETS_DATA',
  PERFORM_ACTION: 'PERFORM_ACTION',
  SLEEP: 'SLEEP',
  SET_GAME_DATA: 'SET_GAME_DATA',
  NEXT_EVENT: 'NEXT_EVENT'
}

export function reducer(state, action) {
  switch (action.type) {

    case 'SET_EVENT_DATA':
      return { ...state, events: action.value };

    case 'SET_USER_DATA':
      return { ...state, user: action.value };

    case 'SET_DAY_DATA':
        return { ...state, day: action.value };

    case 'SET_PETS_DATA':
      return { ...state, pets: action.value };

    case 'SET_ENERGY_DATA':
      return { ...state, game: {...state.game, energy: action.value }};

    case 'SET_GAME_DATA':
      return { ...state, game: action.value};

    case 'PERFORM_ACTION':
      return { 
        ...state, 
        pets: [...state.pets, state.pets[action.value.petId - 1].mood = action.value.newMood], 
        game: {...state.game, energy: state.game.energy - 1, event: action.value.nextEvent}
      };

    case 'NEXT_EVENT' :
      return { ...state, game: {...state.game, event: action.value}};

    case 'SLEEP':
      return { ...state, game: {...state.game, energy: 5, day: state.game.day + 1 }};
        
    default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    )
  }
}