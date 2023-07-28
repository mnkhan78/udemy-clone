import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk("user/signUp", async (userData) => {
  const response = await axios.post("http://localhost:3030/users", userData);
  return response.data;
});

export const signIn = createAsyncThunk("user/signIn", async (credentials) => {
  const response = await axios.get("http://localhost:3030/users", {
    params: {
      username: credentials.username,
      password: credentials.password,
    },
  });
  return response.data[0];
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("token");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToken, addUser, logout } = userSlice.actions;
export default userSlice.reducer;
