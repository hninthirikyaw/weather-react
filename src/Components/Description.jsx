import React from "react";

const Description = (props) => {
  let dates = props.date;
  let icon = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dates.getDay()];
  let hours = dates.getHours();
  let minutes = dates.getMinutes();

  //   console.log(day);
  return (
    <div>
      <div className="city">
        <h2>{props.location}</h2>
        <p>
          <span>{day}</span> <span>{hours}</span>:<span>{hours}</span>
        </p>
        <p>{props.condition}</p>
      </div>
      <div className="row weather-condition">
        <div className="col-6 temperature">
          <img src={icon} alt="weather-icon" />
          <p><span className="temp">{props.temperature}  </span>  <span className="unit">°C</span></p>
        </div>
        <div className="col-6">
          <p>Humidity: {props.humidity} % </p>
          <p>Wind: {props.wind} km/h </p>
        </div>
      </div>
      <div className="weather-forecast row">
        <div className="col">
          <p>Tue</p>
          <img
            src="https://openweathermap.org/img/wn/11d.png"
            alt="weather-icon"
          />
          <p>{Math.round(props.temperature - 2.5)}°</p>
        </div>
        <div className="col">
          <p>Wed</p>
          <img
            src="https://openweathermap.org/img/wn/09n.png"
            alt="weather-icon"
          />
          <p>{props.temperature - 1}°</p>
        </div>
        <div className="col">
          <p>Thu</p>
          <img
            src="https://openweathermap.org/img/wn/04n.png"
            alt="weather-icon"
          />
          <p>{props.temperature}°</p>
        </div>
        <div className="col">
          <p>Fri</p>
          <img
            src="https://openweathermap.org/img/wn/02n.png"
            alt="weather-icon"
          />
          <p>{props.temperature - 1}°</p>
        </div>
        <div className="col">
          <p>Sat</p>
          <img
            src="https://openweathermap.org/img/wn/03d.png"
            alt="weather-icon"
          />
          <p>{props.temperature - 3}°</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
