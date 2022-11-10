import "./App.css";
import { useEffect as useMyEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const getCurrentWeather = async () => {
    console.log("hello from getCurrentTime");
    try {
      let response = await fetch("/weather");
      let values = await response.json();
      console.log(values);
      setCurrentWeather(values);
    } catch (ex) {
      console.log(ex);
    }
  };

  useMyEffect(() => {
    console.log("hello from useEffect");
    const id = setInterval(() => {
      console.log("hello from interval");
      getCurrentWeather();
    }, 3000);

    return () => clearInterval(id);
  }, []);
  const clearCurrentTime = () => setCurrentWeather(null);
  return (
    <div className="App">
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      <button onClick={getCurrentWeather}> Get Current Weather </button>
      <button onClick={clearCurrentTime}> Clear Current Weather</button>
    </div>
  );
}

export default App;
