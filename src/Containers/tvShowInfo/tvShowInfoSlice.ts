import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShow } from "../../types";
import { fetchShowById } from "./tvShowInfoThunks.ts";
import { RootState } from "../../app/store.ts";

interface TvShowInfoSlice {
  show: IShow | null;
  loading: boolean;
}

const initialState: TvShowInfoSlice = {
  show: null,
  loading: false,
};

export const selectShow = (state: RootState) => state.tvShowInfo.show;
export const selectShowLoading = (state: RootState) => state.tvShowInfo.loading;

const tvShowInfoSlice = createSlice({
  name: "tvShowInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchShowById.fulfilled,
        (state, action: PayloadAction<IShow>) => {
          state.show = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchShowById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const tvShowInfoReducer = tvShowInfoSlice.reducer;
