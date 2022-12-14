import React, { useState, useEffect } from "react";
import GearDetails from "./GearDetails";

const GearList = () => {
  const [backpacks, setBackpacks] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/backpacks");
      const json = await response.json();

      if (response.ok) {
        setBackpacks(json);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <React.Fragment>
      <div className="backpacks">
        <h2 className="text-4xl m-2">Backpacks</h2>
        {backpacks &&
          backpacks.map((backpack) => (
            <GearDetails key={backpack._id} backpack={backpack} />
          ))}
      </div>
    </React.Fragment>
  );
};

export default GearList;
