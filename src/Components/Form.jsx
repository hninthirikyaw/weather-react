import React, { useState } from "react";
import axios from "axios";
import "../index.css";
import Description from "./Description";

const Form = () => {
  let [city, setCity] = useState("Lisbon");
  let [temperature, setTemperature] = useState("19");
  let [wind, setWind] = useState("4");
  let [humidity, setHumidity] = useState("80");
  let [condition, setCondition] = useState("Clouds");
  let [location, setLocation] = useState("Lisbon");
  let [date, setDate] = useState(new Date());
  let [icon, setIcon] = useState("10d");
  let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  function displayWeather(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setCondition(response.data.weather[0].description);
    setLocation(response.data.name);
    setDate(new Date(response.data.dt * 1000));
    console.log(date);
    setIcon(response.data.weather[0].icon);
  }

  function submitHandler(event) {
    event.preventDefault();
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div>
        <form onSubmit={submitHandler} className="d-flex gap-1 w-75 mb-4">
          <input
            type="search"
            placeholder="Search the city here..."
            className="form-control "
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
          <button className="btn btn-success">Current</button>
        </form>
      </div>
      <Description
        location={location}
        temperature={temperature}
        humidity={humidity}
        wind={wind}
        condition={condition}
        date={date}
        icon={icon}
      />
    </div>
  );
};

export default Form;
