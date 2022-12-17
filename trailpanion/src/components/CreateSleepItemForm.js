import React, { useState } from "react";
import { useGearContext } from "../hooks/useGearContext";

const CreatesleepItemForm = () => {
  const { dispatch } = useGearContext();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [kind, setKind] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sleepItem = { brand, model, kind, weight };

    const response = await fetch("/api/sleepItems", {
      method: "POST",
      body: JSON.stringify(sleepItem),
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
      setError(null);
      setBrand("");
      setModel("");
      setKind("");
      setWeight("");
      setEmptyFields([]);
      console.log("new sleepItem added:", json);
      dispatch({ gearType: "sleepItems", type: "CREATE_GEAR", payload: json });
    }
  };

  return (
    <form className="create flex flex-col" onSubmit={handleSubmit}>
      <h3>Add Sleeping gear</h3>

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

      <label>Type of sleep gear:</label>
      <input
        type="number"
        onChange={(e) => setKind(e.target.value)}
        value={kind}
        className={emptyFields.includes("kind") ? "error" : ""}
      />

      <label>weight:</label>
      <input
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
        className={emptyFields.includes("weight") ? "error" : ""}
      />

      <button className="m-2 bg-springGreen ">Add sleepItem</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CreatesleepItemForm;
