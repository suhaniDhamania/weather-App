import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Searchbox({ updateinfo }) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);
  const handlechange = (event) => {
    setCity(event.target.value);
  };
  const handlesubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getwheatherinfo();
      updateinfo(newinfo);
    } catch (err) {
      seterror(true);
    }
  };
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "cf2980f50bdac9571fe5d5d4f8c0c258";
  async function getwheatherinfo() {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      const result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description, 
      };
      return result;
    } 
    catch (err) {
      throw err;
    }
  }
  return (
    <div className="searchbox">
      <form onSubmit={handlesubmit}>
        <TextField
          value={city}
          onChange={handlechange}
          id="outlined-basic"
          label="City name"
          variant="outlined"
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained" onClick={handlesubmit}>
          Send
        </Button>

        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
}
