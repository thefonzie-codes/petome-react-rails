import { getById, fetchData, createGame } from '../hooks/helpers';
import cat from '../mocks/sprites/neko.png';
import background from '../mocks/background/image1_0.png';
import '../styles/StartScreen.scss';
import { useState } from 'react';

export default function StartScreen(props) {

  const { state, dispatch, ACTIONS } = props;

  const [ user, setUser ] = useState('');

  return <header className="App-header" style={{ backgroundImage: `${background}` }}>
    <h1 className='welcome'>Welcome to Petome!</h1>
    <img src={cat} className="mascot" />
    <form>
      <input 
      id="user"
      type="text" 
      label="user" 
      placeholder="What's your name?"
      value={user}
      onChange={(evt) => {
        setUser(evt.target.value);
      }}
      onSubmit={(evt) => {
        evt.preventDefault();
        createGame(evt.target.value)
      }}>
      </input>
      <button type="submit">New Game</button>
    </form>
  </header>;
}