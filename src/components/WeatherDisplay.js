import React, { Component } from "react";
import Search from "./Search";
import Header from "./Header";

import { Container, Row, Card } from "react-bootstrap";

import "../css/StylingFile.css";

import ApiService from "../Service";

import Main from "./Main";
/** This class component receives data and passes the data to its render component  */
class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
    this.apiService = new ApiService();
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
