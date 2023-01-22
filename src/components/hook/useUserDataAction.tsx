import { useContext } from "react";
import { UserDataActionContext } from "../context/UserDataProvider";

function useUserDataAction() {
  return useContext(UserDataActionContext);
}

export default useUserDataAction;
