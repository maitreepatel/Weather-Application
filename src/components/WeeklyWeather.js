import Accordion from "react-bootstrap/Accordion";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function WeeklyWeather() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Hourly Forcast</Accordion.Header>
          <Accordion.Body>
            <Card style={{ width: "9rem" }}>
              <Card.Header>TBD</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Hour(Time)</ListGroup.Item>
                <ListGroup.Item>Icon</ListGroup.Item>
                <ListGroup.Item>Temp</ListGroup.Item>
              </ListGroup>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>TBD</Accordion.Header>
          <Accordion.Body>
            <Card style={{ width: "9rem" }}>
              <Card.Header>Featured</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Hour(Time)</ListGroup.Item>
                <ListGroup.Item>Icon</ListGroup.Item>
                <ListGroup.Item>Temp</ListGroup.Item>
              </ListGroup>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default WeeklyWeather;
