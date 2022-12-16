import React from "react";
import { useGearContext } from "../hooks/useGearContext";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";

const FootwearDetails = ({ footwear }) => {
  const { dispatch } = useGearContext();
  const handleClick = async () => {
    const response = await fetch("/api/footwears/" + footwear._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ gearType: "footwears", type: "DELETE_GEAR", payload: json });
    }
  };

  return (
    <div className="footwearDetails m-4">
      <h4 className="text-3xl">
        {footwear.brand} {footwear.model}
      </h4>
      <p>
        <strong>Weight (g): </strong>
        {footwear.style}
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

export default FootwearDetails;

// {/* <p>
//   <strong>Storage capacity (L): </strong>
//   {backpack.capacity}
// </p>
// <p>
//   {formatDistanceToNow(new Date(backpack.createdAt), { addSuffix: true })}
// </p> */}
