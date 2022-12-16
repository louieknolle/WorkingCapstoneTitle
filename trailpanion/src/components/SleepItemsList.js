import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import SleepItemDetails from "./SleepItemDetails";
import CreateSleepItemForm from "./CreateSleepItemForm";

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
      <div className="flex justify-evenly">
        <CreateSleepItemForm />

        <div className="backpacks">
          <h2 className="text-xl m-2">Sleep Gear</h2>
          {sleepItems.length &&
            sleepItems.map((sleepItem) => (
              <SleepItemDetails key={sleepItem._id} sleepItem={sleepItem} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SleepItemsList;
