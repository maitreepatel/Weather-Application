import React, { Component, useState } from "react";
import Search from "./Search";
import Header from "./Header";

import { Container, Row, Col, Card } from "react-bootstrap";

import "../css/StylingFile.css";
import FetchData from "./FetchData";
import data from "./data.json";
import ApiService from "../Service";
import HourlyWeather from "./HourlyWeather";
import Main from "./Main";
class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
    this.apiService = new ApiService();
    //console.log("Hiiiiiiiiiiiiiiiiiiiiiiiii", this.state.weatherData);
  }
  handleDataChange = (newData) => {
    this.setState({ data: newData });
  };
  handleLoading = (loadingData) => {
    this.setState({ loading: loadingData });
  };

  render() {
    const { data, loading } = this.state;
    return (
      <div>
        <Card className="weatherCard">
          {<Header />}
          <Container>
            <Row>
              {
                <Search
                  //data={this.state.weatherData}
                  onDataChange={this.handleDataChange}
                  handleLoading={this.handleLoading}
                />
              }
            </Row>
            <Row>
              <Main data={data} loading={loading} />
            </Row>
          </Container>
          <Card.Footer className="text-muted">
            The most accurate and updated weather application
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default WeatherDisplay;
