import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MovieProvider from "./Context/MovieProvider";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Upcoming from "./Pages/Upcoming";
import Movies from "./Pages/MoviesByGenres";
import MovieDetailsData from "./Components/MovieDetailsData";

const App = () => {
  return (
    <MovieProvider>
      <section className="w-full h-full flex bg-primaryColor page p-0 justify-centers mb-16  sm:mb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Popular" element={<Trending />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/Movies/:id" element={<MovieDetailsData />} />
          <Route path="*" element={<Movies />} />
        </Routes>
        <NavBar />
      </section>
    </MovieProvider>
  );
};

export default App;
