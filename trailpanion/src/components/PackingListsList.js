import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import PackingListDetails from "./PackingListDetails";

const PackingListsList = () => {
  const { gear, dispatch } = useGearContext();
  console.log({ bps: gear.packingLists });

  const packingLists = gear.packingLists;

  useEffect(() => {
    const fetchPackingLists = async () => {
      const response = await fetch("/api/packingLists");
      const json = await response.json();

      if (response.ok) {
        dispatch({ gearType: "packingLists", type: "SET_GEAR", payload: json });
      }
    };

    fetchPackingLists();
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="packingLists bg-white w-1/5 h-72 overflow-y-auto rounded drop-shadow-md border-b">
        <h2 className="text-3xl m-2 text-center">Packing List</h2>
        {packingLists.length
          ? packingLists.map((packingList) => (
              <packingListDetails
                key={packingList._id}
                packingList={packingList}
              />
            ))
          : ""}
      </div>
    </React.Fragment>
  );
};

export default PackingListsList;
