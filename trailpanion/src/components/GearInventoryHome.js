import React from "react";
import GearList from "./GearList";
import MamaForm from "./MamaForm";

const GearInventoryHome = () => {
  return (
    <div className="flex flex-between h-screen">
      <MamaForm />
      <GearList />
    </div>
  );
};

export default GearInventoryHome;
