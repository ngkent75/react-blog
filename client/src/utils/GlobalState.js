import React, { useContext, useReducer, createContext, useContext } from "react";
import UPDATE_POSTS from "./action";
import ADD_POST from "./action";
import REMOVE_POST from "./action";
import SET_CURRENT_POST from "./action";
import LOADING from "./action";
// Don't forget to import all of your actions!

const StoreContext = createContext({
  id: "",
  title: "",
  body: "",
  name: "",
  loading: false,
  currentPost: "",
  post: []
});

const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_POSTS:
    return [
      ...state,
      {
        // id: action.id,
        title: action.title,
        body: action.body,
        name: action.name,
        loading: false
      }
    ];
  case ADD_POST:
    return
  case REMOVE_POST:
    return
  case SET_CURRENT_POST:
    return {
      ...state,
      currentPost: action.post,
      loading: false
    };
  case LOADING:
    return
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return "PROVIDER ELEMENT HERE";
};

const useStoreContext = () => {
  return useContext(StoreContext)
};

export { StoreProvider, useStoreContext };
