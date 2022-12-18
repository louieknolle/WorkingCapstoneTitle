import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import PackingListDetails from "./PackingListDetails";

const PackingListsList = () => {
  const { gear, dispatch } = useGearContext();
  console.log({ bps: gear.packingLists });

  const packingLists = gear.packingLists;

  useEffect(() => {
    const fetchPackingLists = async () => {
      const response = await fetch("/api/packingLists", {
        method: "GET",
        // body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ gearType: "packingLists", type: "SET_GEAR", payload: json });
      }
    };

    fetchPackingLists();
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="packingLists grid gap-4 grid-cols-3 grid-rows-3 m-auto">
        {packingLists.length
          ? packingLists.map((packingList) => (
              <div className="rounded drop-shadow-md  bg-white">
                <PackingListDetails
                  key={packingList._id}
                  packingList={packingList}
                />
              </div>
            ))
          : ""}
      </div>
    </React.Fragment>
  );
};

export default PackingListsList;
