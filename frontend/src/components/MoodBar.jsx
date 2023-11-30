import "../styles/MoodBar.scss";

export default function MoodBar({ pets }) {
  return (
    <div className="pet-stats">
      <div className="mood-bar-container">
        <div
          className="mood-bar"
          style={{ width: `${(pets[0].mood / 15) * 100}` + "%" }}
        ></div>
      </div>
    </div>
  );
}
