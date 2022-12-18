import React, { useState } from "react";
import { useGearContext } from "../hooks/useGearContext";

const CreatesleepItemForm = ({ onSubmitted }) => {
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
      onSubmitted();
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
        placeholder="Type (e.g. ground pad)"
        type="text"
        onChange={(e) => setKind(e.target.value)}
        value={kind}
        className="mt-8 p-1"
      />

      <input
        placeholder="Weight (in g)"
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
        className="mt-8 p-1"
      />

      <button className="mt-8 m-auto w-1/2 bg-springGreen text-white">
        Add
      </button>
      {error && <div className="error text-white m-auto">{error}</div>}
    </form>
  );
};

export default CreatesleepItemForm;
