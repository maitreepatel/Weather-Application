const API_URL = "https://api.tomorrow.io/v4";
/** This class component is to fetch data from API */
class ApiService {
  async fetchData(seachTerm) {
    try {
      const response = await fetch(
        `${API_URL}/weather/forecast?location=${seachTerm}&apikey=bcQ5WmQP3A6vP3FiEy2npE5SRa6wOP5K`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  async postData(body) {
    try {
      const response = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

export default ApiService;
