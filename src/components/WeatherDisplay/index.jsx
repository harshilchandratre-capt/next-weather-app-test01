import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  // Check if weatherData is available
  if (!weatherData) {
    return <div>No weather data available</div>;
  } else {
    // Extract relevant weather information from weatherData
    const { main, description } = weatherData.weather[0];
    const { temp, humidity } = weatherData.main;
    const tempCelsius = temp - 273.15;

    return (
      <div className="w-full h-max">
        <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
        <div>
          <p>Main: {main}</p>
          <p>Description: {description}</p>
          <p>Temperature: {tempCelsius.toPrecision(2)} °C</p>
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
    );
  }
};

export default WeatherDisplay;
