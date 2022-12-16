import React from "react";
import { useGearContext } from "../hooks/useGearContext";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";

const SleepItemDetails = ({ sleepItem }) => {
  const { dispatch } = useGearContext();
  const handleClick = async () => {
    const response = await fetch("/api/sleepItems/" + sleepItem._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ gearType: "sleepItems", type: "DELETE_GEAR", payload: json });
    }
  };

  return (
    <div className="sleepItemDetails m-4 flex flex-row justify-evenly items-center">
      <h4 className="text-3xl">
        {sleepItem.brand} {sleepItem.model}
      </h4>
      {/* <p>
        <strong>Weight (g): </strong>
        {sleepItem.style}
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

export default SleepItemDetails;

// {/* <p>
//   <strong>Storage capacity (L): </strong>
//   {backpack.capacity}
// </p>
// <p>
//   {formatDistanceToNow(new Date(backpack.createdAt), { addSuffix: true })}
// </p> */}
