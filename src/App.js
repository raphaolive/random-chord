import { useState } from "react";
import Button from "./components/Button";
import Chords from "./components/Chords";

function App() {
  const [item, setItem] = useState("Clique para começar!");

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
    setItem(chordsList[Math.floor(Math.random() * chordsList.length)])
  }

  return (
    <>
      <Button onClick={choseChord} />
      <Chords showIt={item} />
    </>
  );
}

export default App;
