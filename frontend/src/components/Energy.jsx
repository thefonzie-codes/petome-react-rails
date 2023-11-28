export default function Energy({energy}){

  return <div className="energy-bar-container">
    <div className="energy-bar" style={{width: `${(energy / 5) * 100}`+'%'}} rowSpan="5">
    </div>
  </div>
}