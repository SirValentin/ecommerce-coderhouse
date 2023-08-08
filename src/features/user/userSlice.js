import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      email: "",
      idToken: "",
      profileImage: "",
      location: {
        latitude: "",
        longitude: "",
      },
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.value = {
        email: "",
        idToken: "",
      };
    },
    saveImage: (state, action) => {
      state.value.profileImage = action.payload;
    },
    setUserLocation: (state, action) => {
      state.value.location = action.payload;
    },
  },
});

export const { setUser, logOut, saveImage, setUserLocation } =
  userSlice.actions;

export default userSlice.reducer;
