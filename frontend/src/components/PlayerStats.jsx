export default function PlayerStats(props) {
  return (
    <div className="player-stats">
      <h3>{props.player.user}</h3>
      <p>Energy: {props.player.energy}</p>
      <p>Day: {props.player.day}</p>
      <button onClick={() => props.dispatch({type: props.ACTIONS.SLEEP})}>Sleep</button>
    </div>
  )
}