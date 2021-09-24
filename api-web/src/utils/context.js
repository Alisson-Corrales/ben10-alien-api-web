import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = `https://ben10-api.herokuapp.com/aliens`;

const initialState = {
  loading: true,
  aliens: [],
  _id: [],
  query: "",
};

const EncyContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchAliens = async (url) => {
    dispatch({ type: "SET_LOADING" });
    //console.log("test");
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_ALIENS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payload: query });
  };

  useEffect(() => {
    //console.log("test");
    fetchAliens(`${API_ENDPOINT}`);
  }, [state.query]);

  return (
    <EncyContext.Provider value={{ ...state, handleSearch }}>
      {children}
    </EncyContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(EncyContext);
};
