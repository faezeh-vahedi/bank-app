import { IAction,IServerResponse } from "../interfaces/user";
import { IUserDataState } from "./UserDataProvider";

const userReducer = (
  state: IUserDataState,
  action: IAction
): IUserDataState => {
  switch (action.type) {
    case "data":
      return { ...state, loading: false, error: "", data: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
    case "loading":
      return { ...state, loading: action.payload };
    case "refresh":
      return { ...state, loading: true, refresh: !action.payload };
    default:
      return state;
  }
};

export const setData = (payload: IServerResponse) => ({
  type: "data",
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: "loading",
  payload,
});

export const setError = (payload: boolean) => ({
  type: "error",
  payload,
});

export const setRefresh = (payload: boolean) => ({
  type: "refresh",
  payload,
});

export default userReducer;
