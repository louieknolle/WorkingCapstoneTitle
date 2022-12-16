import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import GearDetails from "./BackpackDetails";
import CreateBackpackForm from "./CreateBackpackForm";

const SheltersList = () => {
  const { gear, dispatch } = useGearContext();

  const shelters = gear.shelters;

  useEffect(() => {
    const fetchShelters = async () => {
      const response = await fetch("/api/shelters");
      const json = await response.json();
      // console.log(json);

      if (response.ok) {
        dispatch({ gearType: "backpacks", type: "SET_GEAR", payload: json });
      }
    };

    fetchBackpacks();
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="flex justify-evenly">
        <CreateBackpackForm />

        <div className="backpacks">
          <h2 className="text-4xl m-2">Backpacks</h2>
          {backpacks.length &&
            backpacks.map((backpack) => (
              <GearDetails key={backpack._id} backpack={backpack} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BackpacksList;
