import "../styles/UserStats.scss"
import Energy from "./Energy";

export default function UserStats ({ game, dispatch, ACTIONS }) {

  const { user, day, energy, pets, events } = game;

  return <div className="user-stats">
    <p>Name: {user}</p>
    <p>Day: {day}</p>
    Energy: <Energy energy={energy}/>
    {/* <button onClick={() => dispatch({ type: ACTIONS.SLEEP })}>Sleep</button>
    <button onClick={() => dispatch({ type: ACTIONS.SET_ENERGY_DATA, value: energy - 1 })}>Burn energy</button> */}
  </div>;
}