import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [weatherData, setData] = useState([]);
  const fetchApiData = () => {
    fetch(
      "https://api.tomorrow.io/v4/weather/forecast?location=toronto&apikey=bcQ5WmQP3A6vP3FiEy2npE5SRa6wOP5K"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  useEffect(() => {
    fetchApiData();
  }, []);
};
export default FetchData;
