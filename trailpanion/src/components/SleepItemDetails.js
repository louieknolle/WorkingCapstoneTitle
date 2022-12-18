import React from "react";
import { useGearContext } from "../hooks/useGearContext";

const SleepItemDetails = ({ sleepItem, onSubmitted }) => {
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

  const handleAddToList = () => {
    onSubmitted(sleepItem);
  };

  return (
    <div
      id="sleepItemDetails"
      className="p-2 flex flex-row justify-between items-center border-t"
    >
      <h4 className="text-xl">
        {sleepItem.brand} {sleepItem.model}
      </h4>
      {!!onSubmitted ? (
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={handleAddToList}
        >
          add_circle
        </span>
      ) : (
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={handleClick}
        >
          delete
        </span>
      )}
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
