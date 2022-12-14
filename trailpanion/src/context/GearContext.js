import { createContext, useReducer } from "react";

export const GearContext = createContext();

export const gearReducer = (state, action) => {
  switch (action.type) {
    case "SET_GEAR":
      state.gear[action.gearType] = action.payload;
      console.log({ set: state });
      return { ...state };

    // return {
    //   gear: action.payload,
    // };
    case "CREATE_GEAR":
      return {
        gear: {
          backpacks:
            action.gearType === "backpacks"
              ? [action.payload, ...state.gear.backpacks]
              : [...state.gear.backpacks],
          shelters:
            action.gearType === "shelters"
              ? [action.payload, ...state.gear.shelters]
              : [...state.gear.shelters],
          footwears:
            action.gearType === "footwears"
              ? [action.payload, ...state.gear.footwears]
              : [...state.gear.footwears],
          sleepItems:
            action.gearType === "sleepItems"
              ? [action.payload, ...state.gear.sleepItems]
              : [...state.gear.sleepItems],
          favoritedTrails:
            action.gearType === "favoritedTrails"
              ? [action.payload, ...state.gear.sleepItems]
              : [...state.gear.sleepItems],
          packingLists:
            action.gearType === "packingLists"
              ? [action.payload, ...state.gear.sleepItems]
              : [...state.gear.sleepItems],
        },
      };

    case "DELETE_GEAR":
      state.gear[action.gearType] = state.gear[action.gearType].filter(
        (gear) => gear._id !== action.payload._id
      );
      console.log({ delete: state.gear[action.gearType] });
      return { ...state };
    default:
      return state;
  }
};

export const GearContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gearReducer, {
    gear: {
      backpacks: [],
      shelters: [],
      footwears: [],
      sleepItems: [],
      favoritedTrails: [],
      packingLists: [],
    },
  });

  return (
    <GearContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GearContext.Provider>
  );
};
