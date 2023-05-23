import Accordion from "react-bootstrap/Accordion";
import React from "react";
import { Table } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
function WeeklyWeather(props) {
  const weeklyData = props.data;

  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Weekly Forecast</Accordion.Header>

          <Accordion.Body>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <tr>
                    <th width="100px">
                      <b>Day</b>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <b>
                        <span fontSize="250px">&#128167;</span> Temp
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>
                        <span fontSize="250px">&#128293;</span> Temp
                      </b>
                    </td>
                  </tr>
                </Table>
              </Col>
              {weeklyData.slice(0, 7).map((item, i) => {
                var Time =
                  item.time.split("T")[0].split("2023-")[1].split("-")[1] +
                  "/" +
                  item.time.split("T")[0].split("2023-")[1].split("-")[0];

                return (
                  <Col>
                    <Table striped bordered hover>
                      <tr>
                        <th width="100px">{Time}</th>
                      </tr>

                      <tr>
                        <td>{item.values.temperatureApparentMin}' C</td>
                      </tr>
                      <tr>
                        <td>{item.values.temperatureApparentMax}' C</td>
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

export default WeeklyWeather;
