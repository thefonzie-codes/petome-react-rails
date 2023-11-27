import { getById, fetchData } from '../hooks/helpers';
import cat from '../mocks/sprites/neko.png';
import background from '../mocks/background/image1_0.png';

export default function StartScreen(props) {

  const { state, dispatch, ACTIONS } = props;

  return <header className="App-header" style={{ backgroundImage: `${background}` }}>
    <img src={cat} className="App-logo" alt="logo" />
    <button onClick={() => {
      fetchData(dispatch);
    }}>AXIOS</button>
  </header>;
}