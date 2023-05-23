import React from "react";
import { Card, ListGroup } from "react-bootstrap";
function WeatherToday(props) {
  const { data } = props;
  const todaysData = data[0];
  var Time =
    todaysData.time.split("T")[0] +
    " " +
    todaysData.time.split("T")[1].split(":00Z")[0];
  return (
    <Card className="weatherCard">
      <ListGroup className="list-group-flush">
        <h2 textAlign="center">
          <span fontSize="250px">&#x1F324;</span>{" "}
          {todaysData.values.temperatureAvg}' C
        </h2>
        <ListGroup.Item>
          <span fontSize="400px">&#8986;</span> Date : {Time}
        </ListGroup.Item>
        <ListGroup.Item>
          <span fontSize="140px">&#x1F321;</span> Temperature :{" "}
          {todaysData.values.temperatureMax}' C |{" "}
          {todaysData.values.temperatureMin}' C
        </ListGroup.Item>
        <ListGroup.Item>
          <span fontSize="140px"> &#x2601;</span> Clowdy :{" "}
          {todaysData.values.cloudBaseAvg * 100} %
        </ListGroup.Item>
        <ListGroup.Item>
          <span fontSize="140px"> &#x26C8;</span> Rain :{" "}
          {todaysData.values.freezingRainIntensityAvg * 100} %
        </ListGroup.Item>
        <ListGroup.Item>
          <span fontSize="140px">&#x2603;</span> Snow :{" "}
          {todaysData.values.iceAccumulationAvg * 100} %
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default WeatherToday;
