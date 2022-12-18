import React from "react";
import { useGearContext } from "../hooks/useGearContext";

const ShelterDetails = ({ shelter, onSubmitted }) => {
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

  const handleAddToList = () => {
    onSubmitted(shelter);
  };

  return (
    <div
      id="shelterDetails"
      className="p-2 flex flex-row justify-between items-center border-t"
    >
      <h4 className="text-xl">
        {shelter.brand} {shelter.model}
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

export default ShelterDetails;

// {/* <p>
//   <strong>Storage capacity (L): </strong>
//   {backpack.capacity}
// </p>
// <p>
//   {formatDistanceToNow(new Date(backpack.createdAt), { addSuffix: true })}
// </p> */}
