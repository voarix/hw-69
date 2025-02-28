import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { useEffect } from "react";
import { fetchShowById } from "./tvShowInfoThunks.ts";
import { selectShow, selectShowLoading } from "./tvShowInfoSlice.ts";
import { Box, CircularProgress, Typography } from "@mui/material";

const TvShowInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectShow);
  const loading = useAppSelector(selectShowLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchShowById(id));
    }
  }, [dispatch, id]);

  return (
    <Box sx={{ display: "flex", padding: 2 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        show && (
          <>
            <img
              src={show.image.medium}
              alt={show.name}
              style={{ width: 150, marginRight: 16 }}
            />
            <div>
              <Typography variant="h4" component="h4">
                {show.name}
              </Typography>
              <Typography variant="body1">{show.summary}</Typography>
            </div>
          </>
        )
      )}
    </Box>
  );
};

export default TvShowInfo;
