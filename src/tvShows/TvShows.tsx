import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks.ts";
import { fetchTvShows } from "./tvShowsThunks.ts";
import { selectFetchShowsLoading, selectShows } from "./tvShowsSlice.ts";

const TvShows = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const fetchLoading = useAppSelector(selectFetchShowsLoading);
  const shows = useAppSelector(selectShows);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(fetchTvShows(e.target.value));
  };

  return (
    <div>
      <input type="text" onChange={onChangeSearch} value={search} />
      {fetchLoading && <div>asdfasdfasdfasdf..</div>}
      <div>
        {shows.map((show) => (
          <div key={show.id}>
            <h3>{show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShows;