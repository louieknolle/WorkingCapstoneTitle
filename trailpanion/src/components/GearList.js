import React, { useState, useEffect } from "react";
import GearDetails from "./GearDetails";
import CreateBackpackForm from "./CreateBackpackForm";

const GearList = () => {
  const [backpacks, setBackpacks] = useState(null);

  useEffect(() => {
    const fetchBackpacks = async () => {
      const response = await fetch("/api/backpacks");
      const json = await response.json();

      if (response.ok) {
        setBackpacks(json);
      }
    };

    fetchBackpacks();
  }, []);
  return (
    <React.Fragment>
      <div className="flex justify-evenly">
        <div className="backpacks">
          <h2 className="text-4xl m-2">Backpacks</h2>
          {backpacks &&
            backpacks.map((backpack) => (
              <GearDetails key={backpack._id} backpack={backpack} />
            ))}
        </div>
        <CreateBackpackForm />
      </div>
    </React.Fragment>
  );
};

export default GearList;
