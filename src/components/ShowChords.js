import React, { useContext, useState } from "react";
import Postit from "../UI/Postit";
import styles from "./ShowChords.module.css";
import { ScaleContext } from "../context/ScalesContext";

const ShowChords = (props) => {

  const { scale } = useContext(ScaleContext);
  const [randomChord, setRandomChord] = useState("");

  const handleChord = () => {
    let chord = scale[Math.floor(Math.random() * scale.length)]
    setRandomChord(chord);
  };
  return (
    <>
      
      {randomChord === "" && <h1 className={styles.title}>Clique para começar!</h1>}
      <Postit onClick={handleChord} content={randomChord}/>
    </>
  );
};

export default ShowChords;
