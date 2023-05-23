import Accordion from "react-bootstrap/Accordion";
import React from "react";
import { Card, ListGroup, Table } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
function HourlyWeather(props) {
  const hourlyData = props.data;
  //const weeklyData = props.weeklyData;
  //console.log(hourlyData, "))))))))))))))))))))))))");
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Hourly Forecast</Accordion.Header>

          <Accordion.Body>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <tr>
                    <th width="100px">
                      <b>Hour</b>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <b>Temp</b>
                    </td>
                  </tr>
                </Table>
              </Col>

              {hourlyData.slice(0, 12).map((item, i) => {
                var Time = item.time.split("T")[1].split(":00Z")[0];

                return (
                  <Col>
                    <Table striped bordered hover>
                      <tr>
                        <th width="100px">{Time}</th>
                      </tr>
                      <tr>
                        <td>{item.values.temperature}' C</td>
                      </tr>
                    </Table>
                  </Col>
                );
              })}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default HourlyWeather;
