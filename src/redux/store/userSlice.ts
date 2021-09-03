import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserParams, UsersApi } from "src/services/users";
import { UserState } from "./types";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const { data } = await UsersApi.getUsers();

  if (data)
    return {
      data,
    };
});

export const getUser = createAsyncThunk(
  "users/getUser",
  async ({ id }: UserParams) => {
    const { data } = await UsersApi.getUser({ id });

    if (data)
      return {
        data,
      };
  }
);

const states: UserState = {
  entities: [],
  selectedUser: null,
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState: states,
  reducers: {
    setUserData: {
      reducer: (state, action: PayloadAction<IUser>) => {
        state.selectedUser = action.payload;
      },
      prepare: (userData: IUser) => ({ payload: userData }),
    },
  },
  extraReducers: (b) => {
    b.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;

      state.entities = action.payload?.data;
      const findUser = action.payload?.data?.find(
        (user) => user.email === "emma.wong@reqres.in"
      );
      state.selectedUser = findUser;
    })
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
      });
    b.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;

      state.selectedUser = action.payload.data;
    })
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
