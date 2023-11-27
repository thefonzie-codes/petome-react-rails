import './App.css';
import useApplicationData from './hooks/useApplicationData';
import Game from './components/Game';
import StartScreen from './components/StartScreen';

function App() {
  const {state, dispatch, ACTIONS} = useApplicationData();

  console.log(state);
  
  return (
    <div className="App">
      {state.game.user ? <Game state={state} dispatch={dispatch} ACTIONS={ACTIONS}/> : <StartScreen state={state} dispatch={dispatch} ACTIONS={ACTIONS}/> }
    </div>
  );
}

export default App;
