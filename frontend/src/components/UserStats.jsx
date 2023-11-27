export default function UserStats ({ game }) {

  const { user, day, energy, pets, events } = game;

  return <div className="user-stats">
    <p>Name: {user}</p>
    <p>Day: {day}</p>
    <p>Energy: {energy}</p>
  </div>;
}