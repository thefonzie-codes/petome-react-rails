import "../styles/UserStats.scss";
import Energy from "./Energy";

export default function UserStats({ game, dispatch, ACTIONS }) {
  const { user, day, energy, pets, events } = game;

  return (
    <div className="user-stats">
      <p className="energy-text"><strong>{user}</strong></p>
      <p className="energy-text">Day: {day}</p>
      Energy: <Energy energy={energy} />
    </div>
  );
}
