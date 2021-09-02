import { configureStore } from "@reduxjs/toolkit";

import createReducer from "./rootReducer";

const reducer = createReducer();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer.createReducer());
  });
}

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  // const { logger } = require(`redux-logger`);
  // middlewares.push(logger);
}
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
});

store.asyncReducers = {};
export const persistStorage = store;

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return false;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;
