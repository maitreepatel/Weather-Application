import React from "react";
import { Card, ListGroup } from "react-bootstrap";
function WeatherToday() {
  return (
    <Card
      border="danger"
      style={{
        width: "18rem",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
      }}
      className="text-center"
    >
      <Card.Body>
        <Card.Title>Today Weather</Card.Title>
        <Card.Text>9'C</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Wind</ListGroup.Item>
        <ListGroup.Item>Humid</ListGroup.Item>
        <ListGroup.Item>Feels Like</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default WeatherToday;
