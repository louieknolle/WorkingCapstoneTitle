import React from "react";
import { useGearContext } from "../hooks/useGearContext";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BackpackDetails = ({ backpack }) => {
  const { dispatch } = useGearContext();
  const handleClick = async () => {
    const response = await fetch("/api/backpacks/" + backpack._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ gearType: "backpacks", type: "DELETE_GEAR", payload: json });
    }
  };

  return (
    <div
      id="backpackDetails"
      className="m-4 flex flex-row justify-between items-center"
    >
      <h4 className="text-2xl">
        {backpack.brand} {backpack.model}
      </h4>
      {/* <p>
        <strong>Weight (g): </strong>
        {backpack.weight}
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

export default BackpackDetails;

// {/* <p>
//   <strong>Storage capacity (L): </strong>
//   {backpack.capacity}
// </p>
// <p>
//   {formatDistanceToNow(new Date(backpack.createdAt), { addSuffix: true })}
// </p> */}
