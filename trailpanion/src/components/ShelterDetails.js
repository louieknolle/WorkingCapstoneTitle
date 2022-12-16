import React from "react";
import { useGearContext } from "../hooks/useGearContext";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";

const ShelterDetails = ({ shelter }) => {
  const { dispatch } = useGearContext();
  const handleClick = async () => {
    const response = await fetch("/api/shelters/" + shelter._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ gearType: "shelters", type: "DELETE_GEAR", payload: json });
    }
  };

  return (
    <div className="shelterDetails m-4 flex flex-row justify-evenly items-center">
      <h4 className="text-3xl">
        {shelter.brand} {shelter.model}
      </h4>
      {/* <p>
        <strong>Weight (g): </strong>
        {Shelter.style}
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

export default ShelterDetails;

// {/* <p>
//   <strong>Storage capacity (L): </strong>
//   {backpack.capacity}
// </p>
// <p>
//   {formatDistanceToNow(new Date(backpack.createdAt), { addSuffix: true })}
// </p> */}
