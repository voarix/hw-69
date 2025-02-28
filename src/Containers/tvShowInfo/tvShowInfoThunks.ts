import { createAsyncThunk } from "@reduxjs/toolkit";
import { IShow } from "../../types";
import { axiosApiId } from "../../axiosApi.ts";

export const fetchShowById = createAsyncThunk<IShow, string>(
  "tvShows/fetchShowById",
  async (id) => {
    const response = await axiosApiId<IShow>(`/${id}`);
    return response.data;
  },
);
