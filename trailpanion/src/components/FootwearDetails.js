import React from "react";
import { useGearContext } from "../hooks/useGearContext";

const FootwearDetails = ({ footwear, onSubmitted }) => {
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

  const handleAddToList = () => {
    onSubmitted(footwear);
  };

  return (
    <div
      id="footwearDetails"
      className="p-2 flex flex-row justify-between items-center border-t"
    >
      <h4 className="text-xl">
        {footwear.brand} {footwear.model}
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

export default FootwearDetails;

// <p>
//   {formatDistanceToNow(new Date(backpack.createdAt), { addSuffix: true })}
// </p> */}
