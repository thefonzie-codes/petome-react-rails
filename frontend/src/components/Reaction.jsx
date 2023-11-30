import { showReaction } from "../hooks/helpers";

export default function Reaction({ isReacting, lastAction, eventId }) {
  console.log(lastAction);

  return (
    <div className="reaction">
      {isReacting && (eventId === 24 || eventId === 25 || eventId === 26) ? (
        <div className="reaction-hidden"> {showReaction(lastAction)} </div>
      ) : null}
    </div>
  );
}
