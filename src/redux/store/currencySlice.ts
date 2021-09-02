import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { CurrencyData, CurrencyState } from "./types";

const states: CurrencyState = {
  entities: [],
  loading: false,
};

const currencySlice = createSlice({
  name: "currency",
  initialState: states,
  reducers: {
    setCurrencyPrice: {
      reducer: (state, action: PayloadAction<CurrencyData>) => {
        const index = state.entities.findIndex(
          (x) => x.symbol === action.payload.symbol
        );
        if (index < 0) state.entities.push(action.payload);

        state.entities[index].value = action.payload.value;
      },
      prepare: (userData: CurrencyData) => ({ payload: userData }),
    },
  },
  extraReducers: (b) => {},
});

export const { setCurrencyPrice } = currencySlice.actions;

export default currencySlice.reducer;
