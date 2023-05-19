import React from "react";
import { Navbar, Container } from "react-bootstrap";
import {
  WiMoonAltWaningCrescent5,
  WiMoonAltWaxingCrescent2,
} from "react-icons/wi";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Brand>
          <h1>
            {" "}
            <WiMoonAltWaningCrescent5 /> Let's Explore Weather Today{" "}
            <WiMoonAltWaxingCrescent2 />
          </h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
