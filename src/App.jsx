import { useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import DailyForecast from "./Components/DailyForecast";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { useState } from "react";
import Location from "./Components/Location";

const API_KEY = "bc259847daf343adbaf125138241604";
const URL = "http://api.weatherapi.com/v1/current.json";

function App() {
  const [search, setSearch] = useState("london");
  const [data, setData] = useState([]);
  const [init, setInit] = useState({
    name: "Madrid",
    condition: "light rains",
    temp: 31,
  });

  useEffect(() => {
    fetch(`${URL}?key=${API_KEY}&q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [init]);

  const handleUpdate = () => {
    setInit((prev) => {
      return {
        ...prev,
        name: data.location.name,
        condition: data.current.condition.text,
        temp: data.current.temp_c,
      };
    });
    console.log(init);
  };

  // handleUpdate();
  return (
    <>
      <Header
        onChange={(e) => setSearch(e.target.value)}
        onClick={handleUpdate}
      />
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
