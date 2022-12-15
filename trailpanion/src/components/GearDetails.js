import React from "react";
import { useBackpacksContext } from "../hooks/useBackpacksContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const GearDetails = ({ backpack }) => {
  const { dispatch } = useBackpacksContext();
  const handleClick = async () => {
    const response = await fetch("/api/backpacks/" + backpack._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BACKPACK", payload: json });
    }
  };

  return (
    <div className="gear-details m-4">
      <h4 className="text-3xl">
        {backpack.brand} {backpack.model}
      </h4>
      <p>
        <strong>Weight (g): </strong>
        {backpack.weight}
      </p>
      <p>
        <strong>Storage capacity (L): </strong>
        {backpack.capacity}
      </p>
      <p>
        {formatDistanceToNow(new Date(backpack.createdAt), { addSuffix: true })}
      </p>
      <span
        className="material-symbols-outlined cursor-pointer"
        onClick={handleClick}
      >
        delete
      </span>
    </div>
  );
};

export default GearDetails;
