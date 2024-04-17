import { useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import DailyForecast from "./Components/DailyForecast";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { useState } from "react";
import Location from "./Components/Location";

const API_KEY = "bc259847daf343adbaf125138241604";

function App() {
  const [search, setSearch] = useState("london");
  const [data, setData] = useState([]);
  const [init, setInit] = useState({
    name: "Madrid",
    condition: "light rains",
    temp: 31,
  });
  const [forecasting, setForecasting] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`;

  useEffect(() => {
    const location = LocatorFn(encodeURIComponent(search));
    fetch(`${URL}&q=${location}&days=5`)
      .then((res) => res.json())
      .catch((Error) => {
        console.log(Error);
      })
      .then((data) => {
        setData(data);
      });
  }, [search]);

  const handleUpdate = () => {
    setForecasting(data.forecast.forecastday);
    setInit((prev) => {
      return {
        ...prev,
        name: data.location.name,
        condition: data.current.condition.text,
        temp: data.current.temp_c,
        img: data.current.condition.icon,
        time: new Date().getFullYear(),
      };
    });
  };

  const LocatorFn = (locate) => {
    return locate;
  };

  return (
    <>
      <Header onChange={handleChange} onClick={handleUpdate} />
      <aside>
        <SideBar />
      </aside>
      <main>
        <Card>
          <Location location={init} />
        </Card>

        <Card>
          {forecasting
            ? forecasting.map((item, index) => (
                <DailyForecast
                  key={index}
                  day={item.day.condition.text}
                  icon={item.day.condition.icon}
                  temp={item.day.maxtemp_c}
                />
              ))
            : "loading"}
        </Card>
      </main>
    </>
  );
}

export default App;
