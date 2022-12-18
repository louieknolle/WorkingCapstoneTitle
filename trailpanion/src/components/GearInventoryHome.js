import React from "react";
import GearList from "./GearList";
import MamaForm from "./MamaForm";
import { Link } from "react-router-dom";

const GearInventoryHome = () => {
  return (
    <div className="flex flex-between h-screen">
      <div className="w-1/5">
        <MamaForm />
        <Link to="/createPackList">
          <button>Create Packing List</button>
        </Link>
      </div>
      <div className="w-4/5">
        <GearList />
      </div>
    </div>
  );
};

export default GearInventoryHome;
