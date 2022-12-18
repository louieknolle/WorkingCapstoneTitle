import React from "react";
import { Link } from "react-router-dom";

const TrailResults = (props) => {
  const { trailsList, userData, activity } = props;
  return (
    <section className="w-full">
      <h1 className="text-2xl my-5 text-center">Destinations</h1>
      <ul>
        {trailsList.map((trail) => (
          <li
            key={trail.place_id}
            className="text-center hover:underline text-xl my-4"
          >
            <Link
              to="/placeDetails"
              state={{ trail, trailsList, activity, userData }}
            >
              {trail.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrailResults;
