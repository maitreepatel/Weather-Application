import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherDisplay from "./components/WeatherDisplay";
function App() {
  /*useLayoutEffect(() => {
    document.body.style.backgroundColor = "blue";
  });*/

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<WeatherDisplay />} />
        </Routes>
      </BrowserRouter>

      {/*<Header />
      <Container fluid="md">
        <Search />
        <WeatherToday />
        <Home />
        <WeeklyWeather />
      </Container> */}
    </div>
  );
}

export default App;
