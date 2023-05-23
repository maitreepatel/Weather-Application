import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherDisplay from "./components/WeatherDisplay";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
