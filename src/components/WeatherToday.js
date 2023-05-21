import React from "react";
import { Card, ListGroup } from "react-bootstrap";
function WeatherToday(props) {
  //console.log("HI", props.data[0].timelines.minutely[0].values);
  return (
    <Card border="danger" className="weatherCard">
      <Card.Body>
        <Card.Title>Today's Weather</Card.Title>
        <Card.Text>Time : {props.data[0].timelines.minutely[0].time}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Temperature : {props.data[0].timelines.minutely[0].values.temperature}
          ' C
        </ListGroup.Item>
        <ListGroup.Item>
          Wind Speed : {props.data[0].timelines.minutely[0].values.windSpeed}{" "}
          KM/H
        </ListGroup.Item>
        <ListGroup.Item>
          Humidity : {props.data[0].timelines.minutely[0].values.windSpeed} %{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          Visibility : {props.data[0].timelines.minutely[0].values.visibility}{" "}
          KM
        </ListGroup.Item>
        <ListGroup.Item>
          Precipitation Probability :{" "}
          {props.data[0].timelines.minutely[0].values.precipitationProbability}{" "}
          %
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <div>
          <Card.Text>
            Sunrise Time : {props.data[0].timelines.daily[0].values.sunriseTime}{" "}
            %
          </Card.Text>
          <Card.Text>
            Sunrise Time : {props.data[0].timelines.daily[0].values.sunsetTime}{" "}
            %
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default WeatherToday;
