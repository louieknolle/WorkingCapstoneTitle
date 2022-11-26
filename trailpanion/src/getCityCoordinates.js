import axios from "axios";

const baseUrl = "http://api.openweathermap.org/geo/1.0/direct?";
const apiKey = "744e1e7aabb5c8deb215ca4cfd8afa8b";

export const getCityCoordinates = async (locationSearch) => {
  try {
    const { data } = await axios.get(
      baseUrl +
        `q=${locationSearch.city},${locationSearch.state},840&limit=1&appid=${apiKey}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
