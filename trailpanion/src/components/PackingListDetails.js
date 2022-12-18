import React, { useEffect, useState } from "react";
import { useGearContext } from "../hooks/useGearContext";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";

const PackingListDetails = ({ packingList }) => {
  const [packWeight, setPackWeight] = useState(null);
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

  const itemsWeightArray = packingList?.list_items?.map((item) => {
    return parseInt(item.weight);
  });

  console.log(itemsWeightArray);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < itemsWeightArray?.length; i++) {
      sum += itemsWeightArray[i];
    }
    setPackWeight(sum);
  }, [itemsWeightArray]);

  return (
    <div
      id="packingListDetails"
      className="p-2 justify-between items-center border-t flex flex-col justify center"
    >
      <div className="flex justify-between">
        <h4 className="text-2xl">{packingList.list_name}</h4>
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={handleClick}
        >
          delete
        </span>
      </div>
      {packingList?.list_items?.map((listItem) => (
        <p key={listItem._id} className="text-xl border-top">
          {listItem.brand} {listItem.model}
        </p>
      ))}
      <p>Total weight: {packWeight} g</p>
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
