export default function Energy({energy}){

  return <div className="energy-bar-container">
    <div className="energy-bar" style={{width: `${(energy / 5) * 100}`+'%'}} rowSpan="5">
      {/* <td className={energy > 0 ? "energy energy-green" : "energy"}> </td>
      <td className={energy > 1 ? "energy energy-green" : "energy"}> </td>
      <td className={energy > 2 ? "energy energy-green" : "energy"}> </td>
      <td className={energy > 3 ? "energy energy-green" : "energy"}> </td>
      <td className={energy > 4 ? "energy energy-green" : "energy"}> </td> */}
    </div>
  </div>
}