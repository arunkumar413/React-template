import React, { useReducer, useContext, createContext } from "react";

export const storeContext = createContext();

const initialState = { userDetails: null, count: 0, isLoggedIn: false, authKey: '' };
const reducer = (CurrentState, action) => {
  switch (action.type) {
    case "increment":
      return { ...CurrentState, count: CurrentState.count + 1 };
    case "decrement":
      return { ...CurrentState, count: CurrentState.count - 1 };
    case "setuser":
      return { ...CurrentState, userDetails: action.payload };
    case "setIsLoggedIn":
      return { ...CurrentState, isLoggedIn: (CurrentState.isLoggedIn? false : true)}
    default:
      throw new Error("Unexpected action");
  }
};

export default function AppStore(props) {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ store, dispatch }}>
      {props.children}
    </storeContext.Provider>
  );
}
