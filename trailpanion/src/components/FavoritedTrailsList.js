import React from "react";
import FavoriteDetails from "./FavoriteDetails";

const FavoritedTrailsList = ({ favoritedTrails }) => {
  return (
    <div className="backpacks bg-white h-72 overflow-y-auto drop-shadow-md border-b">
      {favoritedTrails.length
        ? favoritedTrails.map((favorite) => (
            <FavoriteDetails key={favorite._id} favorite={favorite} />
          ))
        : ""}
    </div>
  );
};

export default FavoritedTrailsList;
