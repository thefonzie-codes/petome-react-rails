export default function PetStats(props) {
  return (
    <div className="pet-stats">
        <h3>{props.pet.name}</h3>
       <p>Mood: {props.pet.mood}</p>
    </div> 
  )
}