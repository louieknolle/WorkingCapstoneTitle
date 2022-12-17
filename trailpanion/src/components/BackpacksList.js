import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import BackpackDetails from "./BackpackDetails";

const BackpacksList = () => {
  const { gear, dispatch } = useGearContext();
  console.log({ bps: gear.backpacks });

  const backpacks = gear.backpacks;

  useEffect(() => {
    const fetchBackpacks = async () => {
      const response = await fetch("/api/backpacks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ gearType: "backpacks", type: "SET_GEAR", payload: json });
      }
    };

    fetchBackpacks();
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="backpacks bg-white w-1/5">
        <h2 className="text-3xl m-2 text-center">Backpacks</h2>
        {backpacks.length &&
          backpacks.map((backpack) => (
            <BackpackDetails key={backpack._id} backpack={backpack} />
          ))}
      </div>
    </React.Fragment>
  );
};

export default BackpacksList;
