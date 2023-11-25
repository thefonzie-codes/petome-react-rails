import './App.css';
import useApplicationData from './hooks/useApplicationData';
import { getById } from './hooks/helpers';
import cat from './mocks/sprites/neko.png';
import background from './mocks/background/image1_0.png';
import PetStats from './components/PetStats';
import PlayerStats from './components/PlayerStats';

function App() {
  const {state, dispatch, ACTIONS} = useApplicationData();

  const {
    event,
    user,
    day,
    energy,
    pets,
    events,
    } = state;

    const petStats = pets.map((pet) => <PetStats key={pet.id} pet={pet} dispatch={dispatch} ACTIONS={ACTIONS} />)

  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `${background}`}}>
      <PlayerStats player={state} dispatch={dispatch} ACTIONS={ACTIONS}/>
      {petStats}
        <img src={cat} className="App-logo" alt="logo" />
        <p>Event: {event}</p>
          <button onClick={() => dispatch({type: ACTIONS.SET_EVENT_DATA, value: event + 1})}>Next</button>
          <button onClick={() => dispatch({type: ACTIONS.SET_EVENT_DATA, value: 2})}>Click Me</button>
          <p>{getById(event, events).dialogue}</p>
          <button onClick={() => dispatch({type: ACTIONS.SET_EVENT_DATA, value: getById(event, events).options[0].nextEvent})}>{getById(event, events).options[0].text}</button>
          <button onClick={() => dispatch({type: ACTIONS.SET_EVENT_DATA, value: getById(event, events).options[1].nextEvent})}>{getById(event, events).options[1].text}</button>
        <p>User: {user}</p>
        <p>Day: {day}</p>
      </header>
    </div>
  );
}

export default App;
