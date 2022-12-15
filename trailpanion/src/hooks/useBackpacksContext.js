import { BackpacksContext } from "../context/BackpackContext";
import { useContext } from "react";

export const useBackpacksContext = () => {
  const context = useContext(BackpacksContext);

  if (!context) {
    throw Error("useBackpacksContext must be inside BackpacksContextProvider");
  }

  return context;
};
