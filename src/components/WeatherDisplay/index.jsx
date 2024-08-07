import React, { useEffect, useState } from "react";

const WeatherDisplay = ({ weatherData }) => {
  const [gifUrl, setGifUrl] = useState("");

  // Mapping of weather descriptions to specific gif URLs
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const descriptionToGifUrl = {
    sunny: "https://giphy.com/embed/98UMeH7pPiOpM5sHDw",
    cloudy: "https://giphy.com/embed/dWIau1ZRyIj3j6YEaL",
    rain: "https://giphy.com/embed/zJGwrm8k3aPkbRjv34",
    snow: "https://giphy.com/embed/AC0oYA3RcRri",
    thunderstorm: "https://giphy.com/embed/qRY3cPYRkyQh2",
    drizzle: "https://giphy.com/embed/3o6wNIK2unphUcCcqQ",
    mist: "https://giphy.com/embed/xUA7b4arnbo3THfzi0",
    fog: "https://giphy.com/embed/oAbvMXvah1M0U",
    haze: "https://giphy.com/embed/9GIEZ60FUeeSAPyltp",
    "few clouds": "https://giphy.com/embed/c31WXGK1jLQBy",
    default: "https://giphy.com/embed/xT9IgDEI1iZyb2wqo8" // A default gif URL
  };

  useEffect(() => {
    if (weatherData) {
      const { description } = weatherData.weather[0];
      const query = description.toLowerCase();

      // Get the specific gif URL based on the description
      const gifUrl = descriptionToGifUrl[query] || descriptionToGifUrl["default"];
      setGifUrl(gifUrl);
    }
  }, [descriptionToGifUrl, weatherData]);

  // Check if weatherData is available
  if (!weatherData) {
    return <div className="text-slate-400">Try searching 'Delhi'.</div>;
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
        {gifUrl && (
          <div className="mt-4">
            <iframe
              src={gifUrl}
              width="1000"
              height="1000"
              frameBorder="0"
              className="w-full h-auto"
              allowFullScreen
              title={`${description} gif`}
            ></iframe>
          </div>
        )}
      </div>
    );
  }
};

export default WeatherDisplay;
