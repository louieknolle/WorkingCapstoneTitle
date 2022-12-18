import React, { useState } from "react";
import FootwearsList from "./FootwearsList";
import BackpacksList from "./BackpacksList";
import SheltersList from "./SheltersList";
import SleepItemsList from "./SleepItemsList";
import { useGearContext } from "../hooks/useGearContext";

const CreatePackList = () => {
  const [list_items, setList_items] = useState([]);
  const [error, setError] = useState("");
  const [list_name, setList_name] = useState("");
  const { dispatch } = useGearContext();

  function onSubmitted(newItem) {
    const newPackList = list_items.concat(newItem);
    setList_items(newPackList);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newList = { list_name, list_items };

    const response = await fetch("/api/packingLists", {
      method: "POST",
      body: JSON.stringify(newList),
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
      setList_items([]);
      setList_name("");
    }
  };

  console.log({ list_name, list_items });
  return (
    <React.Fragment>
      <div className="flex h-screen">
        <div className="w-1/5 bg-white flex flex-col justify-start align-center text-xl">
          <div className="flex flex-col">
            <h1 className="text-center mt-4 text-3xl">New List</h1>
            <p className=" flex justify-center mt-4">
              Press
              <span className="material-symbols-outlined px-2">
                {" "}
                add_circle{" "}
              </span>
              to add item.
            </p>
          </div>
          <div className="flex flex-col justify-center w-4/5 mt-6 p-2">
            <div className="mt-4">
              {list_items.length > 0 ? (
                <input
                  type="text"
                  placeholder="List Name"
                  onChange={(e) => setList_name(e.target.value)}
                  value={list_name}
                />
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              {list_items.length > 0
                ? list_items.map((item) => <p key={item._id}>{item.model}</p>)
                : ""}
            </div>
            <div className="mt-8">
              {list_items.length > 0 ? (
                <button
                  onClick={handleSubmit}
                  className="bg-midnightBlue w-4/5"
                >
                  Create List
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="gearList w-full flex flex-col justify-evenly">
          <div className="flex justify-evenly mt-2">
            <BackpacksList onSubmitted={onSubmitted} />
            <FootwearsList onSubmitted={onSubmitted} />
          </div>
          <div className="flex justify-evenly mt-8">
            <SheltersList onSubmitted={onSubmitted} />
            <SleepItemsList onSubmitted={onSubmitted} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePackList;
