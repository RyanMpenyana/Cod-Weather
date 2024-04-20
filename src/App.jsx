import "./App.css";
import Card from "./Components/Card";
import DailyForecast from "./Components/DailyForecast";
import Header from "./Components/Header";
import { useState } from "react";
import Location from "./Components/Location";
import img from "./assets/311.png";

const API_KEY = "bc259847daf343adbaf125138241604";
const CURRENT = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`;
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const date = new Date();
const day = days[date.getDay()];

function App() {
  const [search, setSearch] = useState("");
  const [init, setInit] = useState({
    date: day,
    name: "Madrid",
    condition: "light rains",
    region: "Madrid",
    country: "Spain",
    temp: 31,
    img: img,
  });
  const [forecasting, setForecasting] = useState([]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`${CURRENT}&q=${search}&days=4`);
    const req = await res.json();
    setForecasting(req.forecast.forecastday);
    setInit((prev) => {
      return {
        ...prev,
        date: day,
        time: `${new Date().getHours()} : ${new Date().getMinutes(2)}`,
        name: req.location.name,
        region: req.location.region,
        country: req.location.country,
        condition: req.current.condition.text,
        temp: req.current.temp_c,
        img: req.current.condition.icon,
      };
    });
    setSearch("");
  };

  return (
    <>
      <Card>
        <Header
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          onClick={handleUpdate}
          onSubmit={handleUpdate}
        />
        <Location location={init} />

        <div className="forecast_days">
          {forecasting
            ? forecasting.map((item, index) => (
                <DailyForecast
                  key={index}
                  day={item.date}
                  icon={item.day.condition.icon}
                  temp={item.day.maxtemp_c}
                />
              ))
            : "loading"}
        </div>
      </Card>
    </>
  );
}

export default App;
