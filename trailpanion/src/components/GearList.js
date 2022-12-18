import React from "react";
import BackpacksList from "./BackpacksList";
import FootwearsList from "./FootwearsList";
import SheltersList from "./SheltersList";
import SleepItemsList from "./SleepItemsList";

const GearList = () => {
  return (
    <React.Fragment>
      <div className="gearList w-full flex flex-col justify-evenly">
        <div className="flex justify-evenly mt-4">
          <BackpacksList />
          <FootwearsList />
        </div>
        <div className="flex justify-evenly mt-4">
          <SheltersList />
          <SleepItemsList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GearList;
