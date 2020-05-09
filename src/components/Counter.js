import React, { useState, useEffect, useContext } from "react";
import { storeContext } from "./StoreContext";
import DisplayCounter from "./DisplayCounter";
import Button from '@material-ui/core/Button'

export default function Counter (props) {
  const appStore = useContext(storeContext);
  console.log(appStore);

  const increment = e => {
    appStore.dispatch({ type: "increment" });
  };

  const decrement = e => {
    appStore.dispatch({ type: "decrement" });
  };


  const setUser=(e)=>{


    appStore.dispatch({type:'setuser', payload: {name:'Arun'}})
  }

  return (
    <div>
      <Button variant ='contained' color='primary' onClick={increment}> Increment</Button>
      <Button variant ='contained' color='secondary' onClick={decrement}> Decrement</Button>
      <Button variant ='contained' color='secondary' onClick={setUser}> set user</Button>


      <DisplayCounter/>
    </div>
  );
}
