import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import FootwearDetails from "./FootwearDetails";

const FootwearsList = () => {
  const { gear, dispatch } = useGearContext();
  console.log({ bps: gear.footwears });

  const footwears = gear.footwears;

  useEffect(() => {
    const fetchFootwears = async () => {
      const response = await fetch("/api/footwears");
      const json = await response.json();
      console.log({ fetched: json });

      if (response.ok) {
        dispatch({ gearType: "footwears", type: "SET_GEAR", payload: json });
      }
    };

    fetchFootwears();
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="footwears  bg-white w-1/5">
        <h2 className="text-3xl m-2 text-center">Footwear</h2>
        {footwears.length
          ? footwears.map((footwear) => (
              <FootwearDetails key={footwear._id} footwear={footwear} />
            ))
          : ""}
      </div>
    </React.Fragment>
  );
};

export default FootwearsList;
