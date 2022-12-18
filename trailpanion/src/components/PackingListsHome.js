import React, { useEffect } from "react";
import PackingListsList from "./PackingListsList";
import { useGearContext } from "../hooks/useGearContext";

const PackingListsHome = () => {
  const { gear, dispatch } = useGearContext();

  const packingLists = gear.packingLists;
  console.log({ PLcontext: packingLists });

  useEffect(() => {
    const fetchPackingLists = async () => {
      const response = await fetch("/api/packingLists");
      const json = await response.json();
      console.log({ fetched: json });

      if (response.ok) {
        dispatch({
          gearType: "packingLists",
          type: "SET_GEAR",
          payload: json,
        });
      }
    };

    fetchPackingLists();
  }, [dispatch]);

  return (
    <div className="ml-1/4">
      <h1 className="text-3xl text-center mt-4 text-white">Packing Lists</h1>
      <div className="overflow-y-auto flex flex-row flex-wrap justify-center mt-12">
        <PackingListsList packingLists={packingLists} />
      </div>
    </div>
  );
};

export default PackingListsHome;
