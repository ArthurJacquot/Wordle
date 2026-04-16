import { useState, type ChangeEvent } from "react";
import styles from "./GuessLetter.module.css";

interface StateGuessLetter {
  state: "active" | "classic" | "unvalid" | "present" | "valid";
}
// Couper le composant en input et la boite autour pour le style.
// Ajouter un autre composant en plus encore au dessus pour gérer les styles ?

function GuessLetter({ state = "classic" }: StateGuessLetter) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^A-Za-z]/g, "");
    setValue(newValue);
  };
  return (
    <div className={styles.bloc}>
      <input type="text" maxLength={1} value={value} onChange={handleChange} />
    </div>
  );
}

export default GuessLetter;
