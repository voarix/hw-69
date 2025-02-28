import { IShow } from "../../types";
import { fetchTvShows } from "./tvShowsThunks.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";

interface TvShowsSlice{
  items: IShow[];
  fetchLoading: boolean;
}

const initialState: TvShowsSlice = {
  items: [],
  fetchLoading: false,
};

export const selectShows = (state: RootState) => state.tvShows.items;
export const selectFetchShowsLoading = (state: RootState) => state.tvShows.fetchLoading;

const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchTvShows.fulfilled, (state, action: PayloadAction<IShow[]>) => {
        state.items = action.payload;
        state.fetchLoading = false;
      })
      .addCase(fetchTvShows.rejected, (state) => {
        state.fetchLoading = false;
      })
    ;
  }
});

export const tvShowsReducer = tvShowsSlice.reducer;

