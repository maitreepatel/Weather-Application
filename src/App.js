import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherDisplay from "./components/WeatherDisplay";
/**  manages the routing in application and render component based on that */
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
