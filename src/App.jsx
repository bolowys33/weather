import { useState } from "react";
import Navbar from "./components/Navbar";
import InputSection from "./components/InputSection";
import axios from "axios";

const appKey = import.meta.env.VITE_APP_KEY;
const url = import.meta.env.VITE_BASE_URL;

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
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
      console.error("Error fetching weather:", error);
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
    </div>
  );
}

export default App;
