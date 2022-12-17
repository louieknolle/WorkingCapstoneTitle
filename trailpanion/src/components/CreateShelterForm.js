import React, { useState } from "react";
import { useGearContext } from "../hooks/useGearContext";

const CreateShelterForm = ({ onSubmitted }) => {
  const { dispatch } = useGearContext();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [weight, setWeight] = useState("");
  const [capacity, setCapacity] = useState("");
  const [season, setSeason] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const footwear = { brand, model, weight, capacity, season };

    const response = await fetch("/api/shelters", {
      method: "POST",
      body: JSON.stringify(footwear),
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
      setSeason("");
      setEmptyFields([]);
      console.log("new shelter added:", json);
      dispatch({ gearType: "shelters", type: "CREATE_GEAR", payload: json });
    }
  };

  return (
    <form className="create flex flex-col" onSubmit={handleSubmit}>
      <h3>Add New Shelter</h3>

      <label>Brand:</label>
      <input
        type="text"
        onChange={(e) => setBrand(e.target.value)}
        value={brand}
        className={emptyFields.includes("brand") ? "border-red-600" : ""}
      />
      <label>Model:</label>
      <input
        type="text"
        onChange={(e) => setModel(e.target.value)}
        value={model}
        className={emptyFields.includes("model") ? "border-red-600" : ""}
      />

      <label>weight:</label>
      <input
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
        className={emptyFields.includes("weight") ? "error" : ""}
      />

      <label>capacity:</label>
      <input
        type="number"
        onChange={(e) => setCapacity(e.target.value)}
        value={capacity}
        className={emptyFields.includes("capacity") ? "error" : ""}
      />

      <label>Season:</label>
      <input
        type="text"
        onChange={(e) => setSeason(e.target.value)}
        value={season}
        className={emptyFields.includes("season") ? "border-red-600" : ""}
      />

      <button className="m-2 bg-springGreen ">Add shelter</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CreateShelterForm;
