import { useContext } from "react";
import { UserDataContext } from "../context/UserDataProvider";

function useUserData() {
  return useContext(UserDataContext);
}

export default useUserData;
