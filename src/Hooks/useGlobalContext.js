import { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
