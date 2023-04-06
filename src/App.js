import { useState } from "react";
import ShowChords from "./components/ShowChords";
import HomePage from "./components/HomePage";
import { ScaleContextProvider } from "./context/ScalesContext";

function App() {
  const [scaleName, setScaleName] = useState("");

  return (
    <ScaleContextProvider>
      {scaleName === "" && <HomePage onSetScale={setScaleName} />}
      {scaleName.length && <ShowChords whatScale={scaleName} />}
    </ScaleContextProvider>
  );
}

export default App;
