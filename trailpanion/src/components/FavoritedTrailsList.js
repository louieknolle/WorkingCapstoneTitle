import React from "react";

const FavoritedTrailsList = ({ favoritesList }) => {
  return (
    <div>
      {favoritesList.length &&
        favoritesList.map((favorite) => (
          <favoriteDetails key={favorite._id} favorite={favorite} />
        ))}
    </div>
  );
};

export default FavoritedTrailsList;
