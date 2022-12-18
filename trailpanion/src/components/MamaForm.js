import React, { useState } from "react";
import CreateBackpackForm from "./CreateBackpackForm";
import CreateFootwearForm from "./CreateFootwearForm";
import CreateShelterForm from "./CreateShelterForm";
import CreateSleepItemForm from "./CreateSleepItemForm";

const MamaForm = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  const onSubmitted = () => {
    setSelectedForm(null);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setSelectedForm(value);
  };
  return (
    <div className=" flex flex-col mt-4 p-4 text-white">
      <h3 className="text-3xl text-center ">
        Add New {selectedForm ? selectedForm : "Gear"}
      </h3>

      {!selectedForm && (
        <select
          onChange={onChange}
          name="gearCategory"
          required
          className="m-3 text-midnightBlue border-2 border-springGreen text-xl"
        >
          <option value="">Select category</option>
          <option value="Backpack">Backpack</option>
          <option value="Footwear">Footwear</option>
          <option value="Sleep Item">Sleep Item</option>
          <option value="Shelter">Shelters</option>
        </select>
      )}
      {selectedForm === "Backpack" && (
        <CreateBackpackForm onSubmitted={onSubmitted} />
      )}
      {selectedForm === "Footwear" && (
        <CreateFootwearForm onSubmitted={onSubmitted} />
      )}
      {selectedForm === "Sleep Item" && (
        <CreateSleepItemForm onSubmitted={onSubmitted} />
      )}
      {selectedForm === "Shelter" && (
        <CreateShelterForm onSubmitted={onSubmitted} />
      )}
    </div>
  );
};

export default MamaForm;
