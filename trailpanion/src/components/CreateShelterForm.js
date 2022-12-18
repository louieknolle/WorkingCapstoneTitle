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
        placeholder="Capacity (# of people)"
        type="number"
        onChange={(e) => setCapacity(e.target.value)}
        value={capacity}
        className="mt-8 p-1"
      />

      <input
        placeholder="Season"
        type="text"
        onChange={(e) => setSeason(e.target.value)}
        value={season}
        className="mt-8 p-1"
      />

      <button className="mt-8 m-auto bg-springGreen w-1/2">Add</button>
      {error && <div className="error text-white m-auto">{error}</div>}
    </form>
  );
};

export default CreateShelterForm;
