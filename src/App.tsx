import "./App.css";
import TvShows from "./Containers/tvShows/TvShows.tsx";
import { Route, Routes } from "react-router-dom";
import TvShow from "./Containers/tvShow/TvShow.tsx";
import { Container } from "@mui/material";

const App = () => {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<TvShows/>} />
        <Route path="/shows" element={<TvShows/>} />
        <Route path="/shows/:id" element={<TvShow/>} />
        <Route path="*" element={<h1>No found page</h1>} />
      </Routes>
    </Container>
  );
};

export default App;
