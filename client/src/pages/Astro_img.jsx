import { useEffect,useState } from "react";
import Figure from "../components/Figure";
import "../styles/astro_img.scss";
import axios from "axios";

const Astro_img = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "5JS20gQ4aHePLkpWjSmtjLn62zWN6AYu0kR2jFvI";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <h1 className="title">Astronomy Picture of the Day</h1>
      <input type="date" id="photo-date" onChange={handleInput}/>
      {date > today ? (
        <h1 className="title">please choose a past date</h1>
      ) : (
        <Figure data = {apod}/>
      )}
    </div>
  );
};

export default Astro_img;