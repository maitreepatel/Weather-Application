import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function Search(props) {
  //console.log("Maitree");
  //console.log(props);
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="search by city name......"
          aria-label="Weather based on city name"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
      </InputGroup>
    </div>
  );
}

export default Search;
