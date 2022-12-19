import React from "react";
import GearList from "./GearList";
import MamaForm from "./MamaForm";
import { Link } from "react-router-dom";

const GearInventoryHome = () => {
  return (
    <div className="flex">
      <div className="w-1/5 flex flex-col content-center">
        <div>
          <MamaForm />
        </div>
        <div className="mx-auto">
          <Link to="/createPackList">
            <button className="text-center m-auto bg-white p-1 shadow-lg">
              Create Packing List
            </button>
          </Link>
        </div>
      </div>
      <div className="w-4/5 mt-2">
        <GearList />
      </div>
    </div>
  );
};

export default GearInventoryHome;
