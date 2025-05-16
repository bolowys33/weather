import { useState } from "react";
import Navbar from "./components/Navbar";
import InputSection from "./components/InputSection";
import axios from "axios";
import WeatherData from "./components/WeatherData";

const appKey = import.meta.env.VITE_APP_KEY;
const url = import.meta.env.VITE_BASE_URL;

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    setLoading(true);
    setError(null)
    try {
      const response = await axios.get(url, {
        params: {
          q: searchText,
          appid: appKey,
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.response.data.message)
      setData(null)
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[skyblue] text-[#333333] h-screen">
      <Navbar />
      <InputSection
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSubmit={getWeather}
      />

      <div className="flex justify-center text-[20px] mt-[80px]">
        {loading ? <p>Loading...</p> : error ? <p className="text-[red]">{error}</p> : data && <WeatherData data={data} />}
      </div>
    </div>
  );
}

export default App;
