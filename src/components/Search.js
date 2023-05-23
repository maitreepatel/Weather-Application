import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";
import ApiService from "../Service";
class Search extends Component {
  constructor(props) {
    super(props);
    this.apiService = new ApiService();
    this.state = {
      searchValue: "Toronto",
    };
  }
  async componentDidMount() {
    this.fetchDataFromApi();
  }
  async fetchDataFromApi() {
    try {
      const { searchValue } = this.state;
      const { onDataChange, handleLoading } = this.props;
      handleLoading(true);
      const data = await this.apiService.fetchData(searchValue);
      // Handle the received data
      onDataChange(data);
      handleLoading(false);
    } catch (error) {
      // Handle the error
      console.error("Error:", error);
    }
  }
  handleSearchClick = (event) => {
    event.preventDefault();

    this.fetchDataFromApi();
  };
  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };
  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            name="searchKeyword"
            placeholder="search by city name......"
            aria-label="Weather based on city name"
            aria-describedby="basic-addon2"
            value={searchValue}
            onChange={this.handleChange}
          />
          <InputGroup.Text id="basic-addon2" onClick={this.handleSearchClick}>
            <span fontSize="140px">&#128269; Search</span>
          </InputGroup.Text>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
