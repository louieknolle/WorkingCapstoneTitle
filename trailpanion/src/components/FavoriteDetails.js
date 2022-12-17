import React from "react";
import { useGearContext } from "../hooks/useGearContext";

const FavoriteDetails = ({ favorite }) => {
  const { dispatch } = useGearContext();

  const handleClick = async () => {
    const response = await fetch("/api/favoritedTrails/" + favorite._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({
        gearType: "favoritedTrails",
        type: "DELETE_GEAR",
        payload: json,
      });
    }
  };

  return (
    <div
      id="favoriteDetails"
      className="m-4 flex flex-row justify-between items-center"
    >
      <h4 className="text-2xl">
        {favorite.name} ({favorite.site})
      </h4>
      {/* <p>
            <strong>Weight (g): </strong>
            {favorite.style}
          </p> */}
      <span
        className="material-symbols-outlined cursor-pointer"
        onClick={handleClick}
      >
        delete
      </span>
    </div>
  );
};

export default FavoriteDetails;
