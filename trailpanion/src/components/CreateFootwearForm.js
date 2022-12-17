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
    <form className="create flex flex-col" onSubmit={handleSubmit}>
      <h3>Add New Footwear</h3>

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

      <label>style:</label>
      <input
        type="text"
        onChange={(e) => setStyle(e.target.value)}
        value={style}
        className={emptyFields.includes("style") ? "error" : ""}
      />

      <label>Waterproof:</label>
      <input
        type="string"
        onChange={(e) => setWaterproof(e.target.value)}
        value={waterproof}
        className={emptyFields.includes("waterproof") ? "error" : ""}
      />

      <button className="m-2 bg-springGreen ">Add footwear</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CreateFootwearForm;
