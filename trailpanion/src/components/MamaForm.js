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
    <div className=" flex flex-col mt-4 p-4">
      <h3 className="text-3xl text-center ">Add New Gear</h3>

      {!selectedForm && (
        <select
          onChange={onChange}
          name="gearCategory"
          required
          className="m-3 text-midnightBlue border-2 border-springGreen"
        >
          <option value="">Select category</option>
          <option value="backpacks">Backpacks</option>
          <option value="footwears">Footwear</option>
          <option value="sleepItems">Sleep Gear</option>
          <option value="shelters">Shelters</option>
        </select>
      )}
      {selectedForm === "backpacks" && (
        <CreateBackpackForm onSubmitted={onSubmitted} />
      )}
      {selectedForm === "footwears" && (
        <CreateFootwearForm onSubmitted={onSubmitted} />
      )}
      {selectedForm === "sleepItems" && (
        <CreateSleepItemForm onSubmitted={onSubmitted} />
      )}
      {selectedForm === "shelters" && (
        <CreateShelterForm onSubmitted={onSubmitted} />
      )}
    </div>
  );
};

export default MamaForm;
