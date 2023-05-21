import React, { Component, useState } from "react";
import Search from "./Search";
import Header from "./Header";
import WeeklyWeather from "./WeeklyWeather";
import { Container, Row, Col, Card } from "react-bootstrap";
import WeatherToday from "./WeatherToday";
import "../css/StylingFile.css";
import FetchData from "./FetchData";
import data from "./data.json";
class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: data,
      hourlyData: data[0].timelines.hourly,
      weeklyData: data[0].timelines.daily,
    };
    //console.log("Hiiiiiiiiiiiiiiiiiiiiiiiii", this.state.weeklyData);
  }
  /*weatherData: {
        hourly: [
          { time: "090909", temp: 2 },
          { time: "090909", temp: 3 },
          { time: "090909", temp: 4 },
          { time: "090909", temp: 5 },
          { time: "090909", temp: 6 },
        ],
        weekly: [
          { time: "090909", temp: 2 },
          { time: "090909", temp: 3 },
          { time: "090909", temp: 4 },
          { time: "090909", temp: 5 },
          { time: "090909", temp: 6 },
        ],
      },
    };*/

  /*async componentDidMount() {
    const url =
      "https://api.tomorrow.io/v4/weather/forecast?location=toronto&apikey=bcQ5WmQP3A6vP3FiEy2npE5SRa6wOP5K";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ weatherData: data });
    //console.log(data);
  }*/
  render() {
    return (
      <div>
        <Card className="weatherCard">
          <Card.Header>{<Header />}</Card.Header>
          <Card.Title>
            search weather details for your city bytyping the city name
          </Card.Title>
          <Container>
            <Row>
              <Col md={4}>
                <Row>{<Search props={this.state.weatherData} />}</Row>
                <Row>{<WeatherToday data={this.state.weatherData} />}</Row>
              </Col>
              <Col md={8}>
                <Row>
                  {
                    <WeeklyWeather
                      data={this.state.hourlyData}
                      weeklyData={this.state.weeklyData}
                    />
                  }
                </Row>
                <Row></Row>
                <Row></Row>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <Card>
                  <Card.Body>
                    <Card.Title>Widget A</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Body>
                    <Card.Title>B</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Body>
                    <Card.Title>C</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Body>
                    <Card.Title>D</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </div>
    );
  }
}

export default WeatherDisplay;
