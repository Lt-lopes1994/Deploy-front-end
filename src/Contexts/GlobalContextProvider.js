import React from "react";
import useGlobalContextProvider from "../Hooks/useGlobalContextProvider";
import GlobalContext from "./GlobalContext";

export default function GlobalContextProvider(props) {
  const valuesProvider = useGlobalContextProvider();

  return (
    <GlobalContext.Provider value={valuesProvider}>
      {props.children}
    </GlobalContext.Provider>
  );
}
