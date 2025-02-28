import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiBase } from "../../axiosApi.ts";
import { IShow, IShowApi } from "../../types";

export const fetchTvShows = createAsyncThunk<IShow[], string>(
  "tvShows/fetchTvShows",
  async (value) => {
    const response = await axiosApiBase(`${value}`);
    return response.data.map((item: IShowApi) => {
      return {
        id: item.show.id,
        name: item.show.name,
        summary: item.show.summary,
        image: item.show.image,
      };
    });
  },
);
