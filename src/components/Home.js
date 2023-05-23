import React, { PureComponent } from "react";
import Button from "react-bootstrap/Button";
/** this is a home page component */
export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className="middle">
          <p>
            <b>Welcome To The Weather Application</b>
          </p>
          <p>
            <i>Check Out Weather Forcast For Any City In The World</i>
          </p>
          <a href="/weather">
            <Button variant="dark">See Full Weather Details</Button>
          </a>
        </div>
      </div>
    );
  }
}
export default Home;
