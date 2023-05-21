import Accordion from "react-bootstrap/Accordion";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
function WeeklyWeather(props) {
  const hourlyData = props.data;
  const weeklyData = props.weeklyData;
  console.log(weeklyData);
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Hourly Forecast</Accordion.Header>
          <Accordion.Body>
            <Row>
              {hourlyData.slice(0, 4).map((item, i) => {
                //let a = item;

                return (
                  <Col md={3}>
                    <Card style={{ width: "8rem" }} key={i}>
                      <Card.Header>tbd</Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          {item.values.temperature}
                        </ListGroup.Item>
                        <ListGroup.Item>Icon</ListGroup.Item>
                        <ListGroup.Item>Temp</ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                );
                //a+
              })}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Weekly Forecast</Accordion.Header>
          <Accordion.Body>
            <Row>
              {weeklyData.slice(0, 4).map((item, i) => {
                //let a = item;

                return (
                  <Col md={3}>
                    <Card style={{ width: "8rem" }} key={i}>
                      <Card.Header>tbd</Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          {item.values.temperatureApparentMax}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {item.values.temperatureApparentMin}
                        </ListGroup.Item>
                        <ListGroup.Item>Temp</ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                );
                //a+
              })}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default WeeklyWeather;
