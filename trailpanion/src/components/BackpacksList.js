import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import BackpackDetails from "./BackpackDetails";
import CreateBackpackForm from "./CreateBackpackForm";

const BackpacksList = () => {
  const { gear, dispatch } = useGearContext();
  console.log({ bps: gear.backpacks });

  const backpacks = gear.backpacks;

  useEffect(() => {
    const fetchBackpacks = async () => {
      const response = await fetch("/api/backpacks");
      const json = await response.json();
      console.log({ fetched: json });

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
          {backpacks.length
            ? backpacks.map((backpack) => (
                <BackpackDetails key={backpack._id} backpack={backpack} />
              ))
            : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BackpacksList;
