import React, { useContext, useEffect, useState } from "react";
import Button from "../UI/Button";
import styles from "./HomePage.module.css";
import { ScaleContext } from "../context/ScalesContext";

const HomePage = (props) => {
  const { scale, setScale } = useContext(ScaleContext);

  const [scales, setScalesData] = useState([]);

  useEffect(() => {
    // setScalesData([]);
    getScales();
  }, []);

  const getScales = async () => {
    const response = await fetch(
      "https://react-http-481ee-default-rtdb.firebaseio.com/scales.json"
    );

    const data = await response.json();

    setScalesData(data.scales);
  };

  const sendChosenScale = (event) => {
    const scaleName = event.target.textContent.split(" ")[0];

    for (let i = 0; i < scales.length; i++) {
      if (scaleName === scales[i].name) setScale(scales[i][scaleName]);
    }
    props.onSetScale(scaleName);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Random Chord 🎵</h1>
      <p className={styles.par}>Escolha uma escala para praticar.</p>
      {scales.length === 0 && <p className={styles.par}>Carregando ...</p>}
      {scales.map((scale) => {
        return (
          <Button key={scale.id} id={scale.id} onClick={sendChosenScale}>
            {scale.name} Major
          </Button>
        );
      })}
    </div>
  );
};

export default HomePage;
