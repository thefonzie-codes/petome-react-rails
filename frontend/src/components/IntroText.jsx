import "../styles/TitleScreen.scss";
import intro from "../assets/intro";
import Typewriter from "./Typewriter";

export default function TitleScreen(props) {

  const { state, dispatch, ACTIONS } = props;

  return (
    <header className="TitleScreen">
      <p className="intro">
        {intro}
      </p>
    </header>
  );
}