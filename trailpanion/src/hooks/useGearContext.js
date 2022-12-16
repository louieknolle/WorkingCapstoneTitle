import { GearContext } from "../context/GearContext";
import { useContext } from "react";

export const useGearContext = () => {
  const context = useContext(GearContext);

  if (!context) {
    throw Error("useGearContext must be inside GearContextProvider");
  }

  return context;
};
