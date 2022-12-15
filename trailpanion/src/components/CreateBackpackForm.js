import React, { useState } from "react";
import { useBackpacksContext } from "../hooks/useBackpacksContext";

const CreateBackpackForm = () => {
  const { dispatch } = useBackpacksContext();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [weight, setWeight] = useState("");
  const [capacity, setCapacity] = useState("");
  const [error, setError] = useState("");

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
    }
    if (response.ok) {
      setError(null);
      setBrand("");
      setModel("");
      setWeight("");
      setCapacity("");
      console.log("new backpack added:", json);
      dispatch({ type: "CREATE_BACKPACK", payload: json });
    }
  };

  return (
    <form className="create flex flex-col" onSubmit={handleSubmit}>
      <h3>Add a New backpack</h3>

      <label>Brand:</label>
      <input
        type="text"
        onChange={(e) => setBrand(e.target.value)}
        value={brand}
      />
      <label>Model:</label>
      <input
        type="text"
        onChange={(e) => setModel(e.target.value)}
        value={model}
      />

      <label>Weight (in g):</label>
      <input
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
      />

      <label>Storage capacity(in L):</label>
      <input
        type="number"
        onChange={(e) => setCapacity(e.target.value)}
        value={capacity}
      />

      <button className="m-2 bg-springGreen ">Add backpack</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CreateBackpackForm;
