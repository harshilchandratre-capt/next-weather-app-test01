"use client";
import SearchBox from "@/components/SearchBox";
import { useState } from "react";
import { fetchWeatherData } from "../../services/weatherService";
import WeatherDisplay from "@/components/WeatherDisplay";
import Button from "@/components/Button";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchWeatherData(cityName);
    setWeatherData(data);
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      {/* search section */}
      <div className="w-max h-max flex items-center gap-8 mb-12">
        <SearchBox
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <Button onClick={handleSearch} />
      </div>


      <WeatherDisplay weatherData={weatherData} />
    </main>
  );
}
