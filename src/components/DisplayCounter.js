import React, { useState, useEffect, useContext } from "react";

import { storeContext } from "./StoreContext";

export default function DisplayCounter(props) {
  const appStore = useContext(storeContext);
  console.log(appStore);

  return <h1> Count is {appStore.store.count} </h1>;
}
