import React, { useEffect } from "react";
import FavoritedTrailsList from "./favoritedTrailsList";
// import ResultsMap from "./ResultsMap";
import { useGearContext } from "../hooks/useGearContext";

const FavoritedTrailsHome = () => {
  const { gear, dispatch } = useGearContext();

  const favoritedTrails = gear.favoritedTrails;

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
      <h1>Favoritez</h1>
      <FavoritedTrailsList favoritedTrails={favoritedTrails} />
      {/* <ResultsMap favoritedTrails={favoritedTrails} /> */}
    </div>
  );
};

export default FavoritedTrailsHome;
