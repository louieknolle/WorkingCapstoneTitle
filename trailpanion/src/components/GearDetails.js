import React from "react";

const GearDetails = ({ backpack }) => {
  return (
    <div className="gear-details m-4">
      <h4 className="text-3xl">
        {backpack.brand} {backpack.model}
      </h4>
      <p>
        <strong>Weight (g): </strong>
        {backpack.weight}
      </p>
      <p>
        <strong>Storage capacity (L): </strong>
        {backpack.capacity}
      </p>
    </div>
  );
};

export default GearDetails;
