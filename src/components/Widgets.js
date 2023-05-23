import { Card, Col } from "react-bootstrap";
/** This function displays today's highlights*/
function Widgets(props) {
  const data = props.data;
  const todaysData = data[0];

  var SunsetTime =
    todaysData.values.sunsetTime.split("T")[0] +
    " " +
    todaysData.values.sunsetTime.split("T")[1].split(":00Z")[0];
  var SunriseTime =
    todaysData.values.sunriseTime.split("T")[0] +
    " " +
    todaysData.values.sunriseTime.split("T")[1].split(":00Z")[0];

  return (
    <>
      <h3>Today's Highlights</h3>

      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>
              <i>Sunrise Time</i>
            </Card.Title>
            <Card.Text>
              <span fontSize="250px">&#x1F305;</span> {SunriseTime}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              <i>Sunset Time</i>
            </Card.Title>
            <Card.Text>
              <span fontSize="250px">&#127751;</span> {SunsetTime}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              <i>Windspeed</i>
            </Card.Title>
            <Card.Text>
              <span fontSize="250px">&#128168;</span>{" "}
              {todaysData.values.windSpeedAvg} {"km/h"}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              <i>Humidity</i>
            </Card.Title>
            <Card.Text>
              <span fontSize="250px">&#128166;</span>{" "}
              {todaysData.values.humidityAvg} {"%"}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              <i>Visibility</i>
            </Card.Title>
            <Card.Text>
              <span fontSize="250px">&#x263C;</span>
              {todaysData.values.visibilityAvg} {"km"}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Widgets;
