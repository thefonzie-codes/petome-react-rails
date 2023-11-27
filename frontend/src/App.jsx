import './App.css';
import useApplicationData from './hooks/useApplicationData';
import { getById, fetchData } from './hooks/helpers';
import cat from './mocks/sprites/neko.png';
import background from './mocks/background/image1_0.png';
import { useEffect } from 'react';

function App() {
  const {state, dispatch, ACTIONS} = useApplicationData();

  console.log(state);

  const {
    event: eventId,
    user,
    day,
    energy,
    pets,
    event
    } = state.game;

=======
  // console.log(state);
  
>>>>>>> Stashed changes
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `${background}`}}>
        <img src={cat} className="App-logo" alt="logo" />
        <p>Event: {eventId}</p>
          <button onClick={() => dispatch({type: ACTIONS.SET_EVENT_DATA, value: eventId + 1})}>Next</button>
          <button onClick={() => dispatch({type: ACTIONS.SET_EVENT_DATA, value: 2})}>Click Me</button>
          {console.log(('inApp:', 1, state.event))}
          <p>{getById(1, state.event).dialogue}</p>
        <p>User: {user}</p>
        <p>Day: {day}</p>
        <p>Energy: {energy}</p>
        <button onClick={() => dispatch({type: ACTIONS.SLEEP})}>Sleep</button>
        <button onClick={() => {
          fetchData(dispatch);
        }}>AXIOS</button>

      </header>
    </div>
  );
}

export default App;
