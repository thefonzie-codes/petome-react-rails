import { getById, fetchData } from "../hooks/helpers";
import cat from "../mocks/sprites/neko.png";
import background from "../mocks/background/image1_0.png";

export default function StartScreen(props) {
  const { state, dispatch, ACTIONS } = props;

  return (
    <header className="App-header" style={{ backgroundImage: `${background}` }}>
      <h1 className="welcome">Welcome to Petome!</h1>
      <p className="intro">
        {" "}
        In the solace of mystical woods, a grieving lumberjack emerges from the
        shadows day-after-day, surviving the rebirth of a nation post-war; a
        victory overshadowed by profound loss. Yet, my life unfolds in a
        monotony of routine, a self-imposed duty for the betterment of my
        nation. Each day is lived not for splendor but for the fulfillment of a
        solemn obligation. My heart echoes with the ache of parted love, weaving
        nostalgia into the mundane woes of the present. I yearn to break free
        from this aimless existence...
      </p>
      <img src={cat} className="mascot" />
      <button onClick={() => fetchData(dispatch)}>New Game</button>
    </header>
  );
}
