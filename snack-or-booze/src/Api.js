import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {

  // Get all snacks
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  // Get all drinks
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  // Add a new item (snack or drink)
  static async addItem(newItem) {
    const url = newItem.type === "snack" ? `${BASE_API_URL}/snacks` : `${BASE_API_URL}/drinks`;
    const result = await axios.post(url, newItem);
    return result.data;
  }
}

export default SnackOrBoozeApi;