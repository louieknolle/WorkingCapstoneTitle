import React from "react";

const TrailResults = (props) => {
  return (
    <section className="">
      <h1>TrailResults</h1>
      <ul>
        {props.trailsList.map((trail) => (
          <li key={trail.place_id}>{trail.name} </li>
        ))}
      </ul>
    </section>
  );
};

export default TrailResults;
