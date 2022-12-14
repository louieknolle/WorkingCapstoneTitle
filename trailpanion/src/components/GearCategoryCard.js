import React from "react";
import gearInventory from "./gearInventory";

const GearInventoryArray = Object.values(gearInventory);

const GearCategoryCard = () => {

  return <React.Fragment>{GearInventoryArray.map((category) => {
    <div className="container">
        <ul>
            <li>{category.</li>
        </ul>
    </div>
  })}</React.Fragment>;
};

export default GearCategoryCard;
