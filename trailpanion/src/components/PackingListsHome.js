import React, { useEffect } from "react";
import PackingListsList from "./PackingListsList";
import { useGearContext } from "../hooks/useGearContext";

const PackingListsHome = () => {
  const { gear, dispatch } = useGearContext();

  const favoritedTrails = gear.favoritedTrails;
  console.log({ context: favoritedTrails });

  useEffect(() => {
    const fetchFavoritesList = async () => {
      const response = await fetch("/api/favoritedTrails");
      const json = await response.json();
      console.log({ fetched: json });

      if (response.ok) {
        dispatch({
          gearType: "favoritedTrails",
          type: "SET_GEAR",
          payload: json,
        });
      }
    };

    fetchFavoritesList();
  }, [dispatch]);

  return (
    <div>
      <div className="w-1/5 bg-white height-1/2 overflow-y-auto flex flex-col justify-center z-10 absolute top-1/3 left-1 shadow-lg rounded-lg">
        <h1 className="text-3xl text-center">Favorite Places</h1>
        <FavoritedTrailsList favoritedTrails={favoritedTrails} />
      </div>
      <div className="w-4/5">
        <FavoritedTrailsMap favoritedTrails={favoritedTrails} />
      </div>
    </div>
  );
};

export default PackingListsHome;