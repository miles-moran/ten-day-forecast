import axios from "axios";
import { useState } from "react";
import Interval from "./components/Interval";
import Input from "./components/Input";

const App = () => {
  const imperial = "imperial";
  const metric = "metric";
  const [units, setUnits] = useState(imperial);
  const [forecast, setForecast] = useState({
    location: null,
    intervals: [],
  });
  const [error, setError] = useState(null);
  const handleSearch = (zip) => {
    const url = `https://ajeuwqu62l.execute-api.us-east-1.amazonaws.com/forecast?zipcode=${zip}`;
    axios
      .get(url)
      .then((res) => {
        setForecast({
          intervals: res.data.data.timelines[0].intervals,
          location: res.data.address,
        });
        setError(null);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className='container' style={{marginTop: '1rem', marginBottom: '1rem'}}>
      <Input handleSearch={handleSearch} />
      <div style={{ color: "red" }}>{error}</div>
      {forecast.intervals.length > 0 && !error && (
        <>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              marginTop: "1rem",
            }}
          >
            Ten Day Forecast
          </div>
          <div style={{ marginBottom: "1rem" }}>{forecast.location}</div>
          <div style={{ fontSize: "1.4rem" }}>
            <span
              className={units === imperial ? "active units" : "units"}
              onClick={() => setUnits(imperial)}
            >
              fahrenheit
            </span>
            <span
              className={units === metric ? "active units" : "units"}
              onClick={() => setUnits(metric)}
            >
              celsius
            </span>
          </div>
          {forecast.intervals.map((interval, i) => (
            <Interval key={i} interval={interval} units={units} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
