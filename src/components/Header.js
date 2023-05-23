import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCloud } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Navbar, Container } from "react-bootstrap";
function Header() {
  const element = <FontAwesomeIcon icon={faCloud} />;
  return (
    <div>
      <h1>
        <span fontSize="140px">&#9925;</span>
        Today's Weather <span fontSize="140px">&#9925;</span>
      </h1>
      <h5>
        <i>Search here to know weather of your city</i>
      </h5>
    </div>
  );
}
export default Header;
