import { showReaction } from "../hooks/helpers"

export default function Reaction ({isReacting, lastAction}){

  console.log(lastAction)
  
  return <div className="reaction">
    {isReacting ? <div className="reaction-hidden"> {(showReaction(lastAction))} </div> : null}
  </div>
}