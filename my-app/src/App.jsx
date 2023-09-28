// import { useState, useEffect } from "react";
import "./App.css";
import { WetterApp } from "./components/WetterApp/WetterApp";


function App() {
  // const [temp, setTemp] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(URL)
  //     result.json().then(json => {
  //       setTemp(json.current.temp_c)
  //     })
      
  //   };

  //   fetchData();
  // }, [temp]);

  // return (
    // <>
    // <div>Die Temperatur in London ist: {temp}°C</div>
    // <h1>Wetterdaten</h1>
    // <input type="text" />
    // <button onClick={handleClick}>Wetter anzeigen</button>
    // </>
    return (
    <div>
      <WetterApp/>
    </div>
  );
}

export default App;
