import React, { useState } from "react";
import { useGearContext } from "../hooks/useGearContext";

const CreateFootwearForm = ({ onSubmitted }) => {
  const { dispatch } = useGearContext();
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [style, setStyle] = useState("");
  const [waterproof, setWaterproof] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const footwear = { brand, model, style, waterproof };

    const response = await fetch("/api/footwears", {
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
      setError("");
      setBrand("");
      setModel("");
      setStyle("");
      setWaterproof("");
      setEmptyFields([]);
      console.log("new footwear added:", json);
      dispatch({ gearType: "footwears", type: "CREATE_GEAR", payload: json });
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
        placeholder="Style"
        type="text"
        onChange={(e) => setStyle(e.target.value)}
        value={style}
        className="mt-8 p-1"
      />

      <input
        placeholder="Waterproof? Y/N"
        type="string"
        onChange={(e) => setWaterproof(e.target.value)}
        value={waterproof}
        className="mt-8 p-1"
      />

      <button className="mt-8 bg-springGreen w-1/2 m-auto">Add</button>
      {error && <div className="error text-white m-auto">{error}</div>}
    </form>
  );
};

export default CreateFootwearForm;
