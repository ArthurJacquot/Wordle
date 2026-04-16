import GuessLetter from "../GuessLetter/GuessLetter";
import styles from "./Game.module.css";
function Game() {
  // autoFocus le premier

  return (
    <div className={styles.gameBody}>
      <GuessLetter />
      <GuessLetter />
      <GuessLetter />
      <GuessLetter />
      <GuessLetter />
    </div>
  );
}

export default Game;
