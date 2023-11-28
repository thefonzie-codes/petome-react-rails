import { getById } from "../hooks/helpers";
import Event from "./Event";
import UserStats from "./UserStats";
import "../styles/Game.scss"
import logo from '../mocks/sprites/neko.png';
import bg from '../mocks/background/image1_0.png';

export default function Game(props) {

  const { state, dispatch, ACTIONS } = props;

  const {
    event: eventId,
    user,
    day,
    energy,
    pets,
    } = state.game;


  return <div className="game" style={{backgroundImage: `url(${bg})`, backgroundSize: "cover"}}>
    <UserStats game={state.game} dispatch={dispatch} ACTIONS={ACTIONS}/>
    <img className="sprite" src={logo}/>
    <Event state={state} dispatch={dispatch} ACTIONS={ACTIONS}/>
  </div>;
}