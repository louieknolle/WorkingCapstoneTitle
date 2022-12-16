import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import FootwearDetails from "./FootwearDetails";
import CreateFootwearForm from "./CreatefootwearForm";

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
      <div className="flex justify-evenly">
        <CreateFootwearForm />

        <div className="footwears">
          <h2 className="text-4xl m-2">footwears</h2>
          {footwears.length
            ? footwears.map((footwear) => (
                <FootwearDetails key={footwear._id} footwear={footwear} />
              ))
            : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FootwearsList;
