import React from "react";
import { useGearContext } from "../hooks/useGearContext";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";

const PackingListDetails = ({ packingList }) => {
  const { dispatch } = useGearContext();
  const handleClick = async () => {
    const response = await fetch("/api/packingLists/" + packingList._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({
        gearType: "packingLists",
        type: "DELETE_GEAR",
        payload: json,
      });
    }
  };

  return (
    <div
      id="packingListDetails"
      className="p-2 flex flex-row justify-between items-center border-t"
    >
      <h4 className="text-xl">
        {packingList.brand} {packingList.model}
      </h4>
      {/* <p>
        <strong>Weight (g): </strong>
        {packingList.weight}
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

export default PackingListDetails;

// {/* <p>
//   <strong>Storage capacity (L): </strong>
//   {backpack.capacity}
// </p>
// <p>
//   {formatDistanceToNow(new Date(backpack.createdAt), { addSuffix: true })}
// </p> */}
