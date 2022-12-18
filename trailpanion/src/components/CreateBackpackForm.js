import React, { useState } from "react";
import { useGearContext } from "../hooks/useGearContext";

const CreateBackpackForm = ({ onSubmitted }) => {
  const { dispatch } = useGearContext();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [weight, setWeight] = useState("");
  const [capacity, setCapacity] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const backpack = { brand, model, weight, capacity };

    const response = await fetch("/api/backpacks", {
      method: "POST",
      body: JSON.stringify(backpack),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      onSubmitted();
      setError(null);
      setBrand("");
      setModel("");
      setWeight("");
      setCapacity("");
      setEmptyFields([]);
      console.log("new backpack added:", json);
      dispatch({ gearType: "backpacks", type: "CREATE_GEAR", payload: json });
    }
  };

  return (
    <form className="create flex flex-col text-xl" onSubmit={handleSubmit}>
      <input
        placeholder="Brand"
        type="text"
        onChange={(e) => setBrand(e.target.value)}
        value={brand}
        className="mt-8 p-1"
      />
      <input
        placeholder="Model"
        type="text"
        onChange={(e) => setModel(e.target.value)}
        value={model}
        className="mt-8 p-1"
      />

      <input
        placeholder="Weight (in g)"
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
        className="mt-8 p-1"
      />

      <input
        placeholder="Volume (in L)"
        type="number"
        onChange={(e) => setCapacity(e.target.value)}
        value={capacity}
        className="mt-8 p-1"
      />

      <button className="mt-8 bg-springGreen w-1/2 m-auto">Add</button>
      {error && <div className="error text-white m-auto">{error}</div>}
    </form>
  );
};

export default CreateBackpackForm;
