import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";
import reducers from "./store";

const createReducer = (asyncReducers: ReducersMapObject<any, any>) => (
  state: any,
  action: never,
) => {
  const combinedReducer = combineReducers(
    Object.assign({
      ...asyncReducers,
      ...reducers,
    }),
  );

  return combinedReducer(state, action);
};

export default createReducer;
