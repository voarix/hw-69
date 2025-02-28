import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { fetchTvShows } from "./tvShowsThunks.ts";
import { selectShows } from "./tvShowsSlice.ts";
import { Autocomplete, TextField } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

const TvShows = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const shows = useAppSelector(selectShows);
  const navigate = useNavigate();

  const onChangeSearch = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      dispatch(fetchTvShows(value));
    }
  };

  const onChangeSelect = (value: string | null) => {
    if (value) {
      const selectedShow = shows.filter((show) => show.name === value)[0];
      if (selectedShow) {
        navigate(`/shows/${selectedShow.id}`);
      }
    }
  };

  return (
    <>
      <Autocomplete
        disablePortal
        options={shows.map((show) => show.name)}
        value={search}
        onInputChange={(_, newValue) => onChangeSearch(newValue)}
        onChange={(_, value) => onChangeSelect(value)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search TV shows" />
        )}
      />
      <Outlet />
    </>
  );
};

export default TvShows;
