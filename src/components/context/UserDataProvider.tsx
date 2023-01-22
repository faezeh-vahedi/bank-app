'use client'

import { createContext, Dispatch, useEffect, useReducer } from "react";
import userReducer, { setData, setError, setLoading } from "./userReducer";
import { IAction,IServerResponse } from "../interfaces/user";

export interface IUserDataState {
  data: IServerResponse[];
  loading: boolean;
  error: string;
  refresh: boolean;
}

export const initialState: IUserDataState = {
  data: [],
  loading: false,
  error: "Error occurred.",
  refresh: false,
};
export const UserDataContext = createContext<IUserDataState>(initialState);
export const UserDataActionContext = createContext<Dispatch<IAction>>(
  () => null
);

interface IProps {
  children: JSX.Element;
}
const UserDataProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const url = "https://dummyjson.com/users";

  useEffect(() => {
    setLoading(true);
    dispatch(setLoading(true));
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((responseJson) => {
        dispatch(setData(responseJson.users));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setError(true));
      });
  }, []);

  return (
    <>
      <UserDataContext.Provider value={state}>
        <UserDataActionContext.Provider value={dispatch}>
          {children}
        </UserDataActionContext.Provider>
      </UserDataContext.Provider>
    </>
  );
};

export default UserDataProvider;
