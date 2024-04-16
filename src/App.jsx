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
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [init, setInit] = useState({
    name: "Madrid",
    condition: "light rains",
    temp: 31,
  });
  const [current, setCurrent] = useState("london");
  const handleChange = (e) => {
    setSearch(e.target.value);
    setCurrent(search);
  };
  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${current}`;

  useEffect(() => {
    fetch(`${URL}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [current]);

  const handleUpdate = () => {
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

  // handleUpdate();
  return (
    <>
      <Header onChange={handleChange} onClick={handleUpdate} value={search} />
      <aside>
        <SideBar />
      </aside>
      <main>
        <Location location={init} />

        <Card>
          <DailyForecast />
          <DailyForecast />
          <DailyForecast />
        </Card>
      </main>
    </>
  );
}

export default App;
