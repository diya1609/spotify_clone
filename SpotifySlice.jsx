import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
    setDiscoverWeekly: (state, action) => {
      state.discover_weekly = action.payload;
    },
  },
});

export const { setUser, setToken, setPlaylists, setDiscoverWeekly } = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectToken = (state) => state.app.token;
export const selectPlaylists = (state) => state.app.playlists;
export const selectDiscoverWeekly = (state) => state.app.discover_weekly;

export default appSlice.reducer;
