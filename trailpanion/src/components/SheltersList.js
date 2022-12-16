import React, { useEffect } from "react";
import { useGearContext } from "../hooks/useGearContext";
import ShelterDetails from "./ShelterDetails";
import CreateShelterForm from "./CreateShelterForm";

const SheltersList = () => {
  const { gear, dispatch } = useGearContext();

  const shelters = gear.shelters;

  useEffect(() => {
    const fetchShelters = async () => {
      const response = await fetch("/api/shelters");
      const json = await response.json();
      // console.log(json);

      if (response.ok) {
        dispatch({ gearType: "shelters", type: "SET_GEAR", payload: json });
      }
    };

    fetchShelters();
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className="flex justify-evenly">
        <CreateShelterForm />

        <div className="shelters">
          <h2 className="text-xl m-2">Shelter</h2>
          {shelters.length &&
            shelters.map((shelter) => (
              <ShelterDetails key={shelter._id} shelter={shelter} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SheltersList;
