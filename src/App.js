import React, { useState, useEffect, useContext } from "react";
import { storeContext } from "./components/StoreContext";
import DisplayCounter from "./components/DisplayCounter";
import AppRouter from "./components/AppRouter";

export default function(props) {
  const appStore = useContext(storeContext);
  console.log(appStore);

  const increment = e => {
    appStore.dispatch({ type: "increment" });
  };

  const decrement = e => {
    appStore.dispatch({ type: "decrement" });
  };

  return (
    <div>
      <AppRouter/>
      
    </div>
  );
}
