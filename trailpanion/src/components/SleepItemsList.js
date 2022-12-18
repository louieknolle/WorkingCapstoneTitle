import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import SleepItemDetails from "./SleepItemDetails";

const SleepItemsList = () => {
  const { gear, dispatch } = useGearContext();

  const sleepItems = gear.sleepItems;

  useEffect(() => {
    const fetchSleepItems = async () => {
      const response = await fetch("/api/sleepItems");
      const json = await response.json();
      // console.log(json);

      if (response.ok) {
        dispatch({ gearType: "sleepItems", type: "SET_GEAR", payload: json });
      }
    };

    fetchSleepItems();
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="backpacks  bg-white w-1/5 h-72 overflow-y-auto rounded drop-shadow-md border-b">
        <h2 className="text-3xl m-2 text-center">Sleep Gear</h2>
        {sleepItems.length
          ? sleepItems.map((sleepItem) => (
              <SleepItemDetails key={sleepItem._id} sleepItem={sleepItem} />
            ))
          : 0}
      </div>
    </React.Fragment>
  );
};

export default SleepItemsList;
