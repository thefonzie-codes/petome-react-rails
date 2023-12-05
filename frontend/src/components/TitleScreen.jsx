import "../styles/TitleScreen.scss";
import intro from "../assets/intro";
import Typewriter from "./Typewriter";

export default function TitleScreen(props) {

  const { state, dispatch, ACTIONS, screen } = props;

  return (
    <header className="TitleScreen">
      {screen === 1 && <h2>Petome</h2>}
    </header>
  );
}
