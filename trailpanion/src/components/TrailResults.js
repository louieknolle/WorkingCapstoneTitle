import React from "react";
import { Link } from "react-router-dom";

const TrailResults = (props) => {
  return (
    <section className="w-full">
      <h1 className="text-2xl my-5 text-center">Destinations</h1>
      <ul>
        {props.trailsList.map((trail) => (
          <li key={trail.place_id} className="text-center">
            <Link to="/placeDetails">{trail.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrailResults;
