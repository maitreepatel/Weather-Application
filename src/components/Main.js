import { Component } from "react";
import WeeklyWeather from "./WeeklyWeather";
import { Container, Row, Col } from "react-bootstrap";
import WeatherToday from "./WeatherToday";

import HourlyWeather from "./HourlyWeather";
import Widgets from "./Widgets";
/** This component modularize the UI in app */
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, loading } = this.props;
    console.log(data);
    if (loading) {
      return <div>Loading...</div>;
    }
    const { timelines } = data;
    const { hourly, daily } = timelines;
    console.log("--------main-------------", daily);

    return (
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <Row>{<WeatherToday data={daily} />}</Row>
            </Col>
            <Col md={8}>
              <Row>{<Widgets data={daily} />}</Row>
            </Col>
            <Row>{<HourlyWeather data={hourly} />}</Row>
            <Row>{<WeeklyWeather data={daily} />}</Row>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Main;
