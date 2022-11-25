import React from "react";

const TrailResults = (props) => {
  return (
    <section className="p-8 bg-slate-200 z-20 absolute bottom-0 inset-x-3 m-2 ">
      <h1>TrailResults</h1>
      <ul>
        {props.trailsList.map((trail) => (
          <li key={trail.place_id}>{trail.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default TrailResults;
