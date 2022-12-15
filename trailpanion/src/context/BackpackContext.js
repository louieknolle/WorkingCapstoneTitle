import { createContext, useReducer } from "react";

export const BackpacksContext = createContext();

export const backpacksReducer = (state, action) => {
  switch (action.type) {
    case "SET_BACKPACKS":
      return {
        backpacks: action.payload,
      };
    case "CREATE_BACKPACK":
      return {
        backpacks: [action.payload, ...state.backpacks],
      };
    case "DELETE_BACKPACK":
      return {
        backpacks: state.backpacks.filter(
          (backpack) => backpack._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const BackpacksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(backpacksReducer, { backpacks: null });

  return (
    <BackpacksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BackpacksContext.Provider>
  );
};
