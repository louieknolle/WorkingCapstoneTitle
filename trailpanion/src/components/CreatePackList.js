import React, { useState } from "react";
import FootwearsList from "./FootwearsList";
import BackpacksList from "./BackpacksList";
import SheltersList from "./SheltersList";
import SleepItemsList from "./SleepItemsList";
import { useGearContext } from "../hooks/useGearContext";

const CreatePackList = () => {
  const [packList, setPackList] = useState([]);
  const [error, setError] = useState("");
  const { dispatch } = useGearContext();

  function onSubmitted(newItem) {
    const newPackList = packList.concat(newItem);
    setPackList(newPackList);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/packingLists", {
      method: "POST",
      body: JSON.stringify(packList),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      onSubmitted();
      setError(null);
      dispatch({ gearType: "packingList", type: "CREATE_GEAR", payload: json });
    }
  };

  console.log(packList);
  return (
    <React.Fragment>
      <div className="w-1/5 bg-white">
        {packList.length > 0
          ? packList.map((item) => <p key={item._id}>{item.model}</p>)
          : ""}
        {packList.length > 0 ? (
          <button onClick={handleSubmit}>Create List</button>
        ) : (
          ""
        )}
      </div>
      <div className="gearList w-full flex flex-col justify-evenly">
        <div className="flex justify-evenly mt-8">
          <BackpacksList onSubmitted={onSubmitted} />
          <FootwearsList onSubmitted={onSubmitted} />
        </div>
        <div className="flex justify-evenly mt-8">
          <SheltersList onSubmitted={onSubmitted} />
          <SleepItemsList onSubmitted={onSubmitted} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePackList;
