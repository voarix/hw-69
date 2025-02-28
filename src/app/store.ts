import { configureStore } from "@reduxjs/toolkit";
import { tvShowsReducer } from "../Containers/tvShows/tvShowsSlice.ts";
import { tvShowInfoReducer } from "../Containers/tvShowInfo/tvShowInfoSlice.ts";

export const store = configureStore({
  reducer: {
    tvShows: tvShowsReducer,
    tvShowInfo: tvShowInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
