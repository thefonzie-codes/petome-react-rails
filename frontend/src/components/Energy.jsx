export default function Energy({energy}){

  return <table className="energy-bar-container">
    <tr className="energy-bar" rowSpan="5">
      <td className={energy > 0 ? "energy energy-green" : "energy"}> </td>
      <td className={energy > 1 ? "energy energy-green" : "energy"}> </td>
      <td className={energy > 2 ? "energy energy-green" : "energy"}> </td>
      <td className={energy > 3 ? "energy energy-green" : "energy"}> </td>
      <td className={energy > 4 ? "energy energy-green" : "energy"}> </td>
    </tr>
  </table>
}