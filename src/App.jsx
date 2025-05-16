import { useState } from "react";
import Navbar from "./components/Navbar";
import InputSection from "./components/InputSection";

function App() {
  return (
    <div className="bg-[skyblue] text-[#333333] h-screen">
      <Navbar />
      <InputSection />
    </div>
  );
}

export default App;
