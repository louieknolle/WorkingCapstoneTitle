import axios from "axios";

const baseUrl = "http://api.openweathermap.org/geo/1.0/direct?";
const apiKey = "744e1e7aabb5c8deb215ca4cfd8afa8b";

export const getTrailsData = async (props) => {
  try {
    // First get coordinates from user input
    const coordinates = await axios.get(
      baseUrl + `q=${props.city},${props.state},840&limit=1&appid=${apiKey}`
    );
    // Then use those coordinates and selected activity to get trail data
    const { data } = await axios.get(
      "https://trailapi-trailapi.p.rapidapi.com/activity/",
      {
        params: {
          lat: coordinates.data[0].lat,
          limit: "15",
          lon: coordinates.data[0].lon,
          radius: "25",
          "q-activities_activity_type_name_eq": props.activity,
        },
        headers: {
          "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
          "x-rapidapi-key":
            "b6ae47641fmsh9978bea9f70b35dp186cafjsn91b9f3796f3b",
        },
      }
    );
    return { data, coordinates };
  } catch (error) {
    console.log(error);
  }
};
