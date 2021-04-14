import React, { useReducer } from "react";
// Don't forget to import all of your actions!

const reducer = (state, action) => {
  switch (action.type) {
  case "UPDATE_POSTS":
    return 
  case "ADD_POST":
    return
  case "REMOVE_POST":
    return
  case "SET_CURRENT_POST":
    return
  case "LOADING":
    return
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return "PROVIDER ELEMENT HERE";
};

const useStoreContext = () => {};

export { StoreProvider, useStoreContext };
