import "./App.css";
import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Header from "./components/Header";
import WeeklyWeather from "./components/WeeklyWeather";
import Container from "react-bootstrap/Container";
import WeatherToday from "./components/WeatherToday";

function App() {
  /*useLayoutEffect(() => {
    document.body.style.backgroundColor = "blue";
  });*/

  return (
    <div className="App">
      <Header />
      <Container fluid="md">
        <Search />
        <WeatherToday />
        <Home />
        <WeeklyWeather />
      </Container>
    </div>
  );
}

export default App;
