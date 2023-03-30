import React, { useState } from "react";
import Postit from "../UI/Postit";
import styles from './ShowChords.module.css'
const ShowChords = () => {
  const [item, setItem] = useState("");

  const chordsList = [
    "C",
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "C#m",
    "F#m",
    "G#m",
    "Cm",
    "Dm",
    "Em",
    "Fm",
    "Gm",
    "Am",
    "Bm",
  ];

  const choseChord = () => {
    setItem(chordsList[Math.floor(Math.random() * chordsList.length)]);
  };

  return (
    <>
      {item === '' && <h1 className={styles.title}>Clique para começar!</h1>}
      <Postit onClick={choseChord} content={item} />
    </>
  );
};

export default ShowChords;
