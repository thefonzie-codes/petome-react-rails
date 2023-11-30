import { getById, fetchData } from '../hooks/helpers';
import cat from '../mocks/sprites/neko.png';
import background from '../mocks/background/image1_0.png';
import '../styles/StartScreen.scss';

export default function StartScreen(props) {

  const { state, dispatch, ACTIONS } = props;

  return <header className="App-header" style={{ backgroundImage: `${background}` }}>
    <h1 className='welcome'>Welcome to Petome!</h1>
    <img src={cat} className="mascot"/>
    <button onClick={() => fetchData(dispatch)}>New Game</button>
  </header>;
}