import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import { ProductParams, ProductsApi } from "src/services/products";
import { ProductState } from "./types";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await ProductsApi.getProducts();

    if (data)
      return {
        data,
      };
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async ({ id }: ProductParams) => {
    const { data } = await ProductsApi.getProduct({ id });

    if (data)
      return {
        data,
      };
  }
);

const states: ProductState = {
  entities: [],
  selectedProduct: null,
  loading: false,
};

const producSlice = createSlice({
  name: "product",
  initialState: states,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;

      state.entities = action.payload.data;
    })
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
      });
    b.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;

      state.selectedProduct = action.payload.data;
    })
      .addCase(getProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default producSlice.reducer;
