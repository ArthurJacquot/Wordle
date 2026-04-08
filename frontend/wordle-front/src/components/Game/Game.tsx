import GuessLetter from "../GuessLetter/GuessLetter";
import styles from "./Game.module.css";
function Game() {
  return (
    <div className={styles.gameBody}>
      <h2>POUET</h2>
      <GuessLetter />
      <GuessLetter />
    </div>
  );
}

export default Game;
