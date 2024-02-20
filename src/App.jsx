import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MovieProvider from "./Context/MovieProvider";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Upcoming from "./Pages/Upcoming";
import Movies from "./Pages/MoviesFiltered";
import MovieDetailsData from "./Components/MovieDetailsData";

const App = () => {
  return (
    <MovieProvider>
      <section className="w-full h-full flex bg-[#1d1c2a] page p-0 justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Popular" element={<Trending />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/All/:id" element={<MovieDetailsData />} />
          <Route path="*" element={<Movies />} />
        </Routes>
        <NavBar />
      </section>
    </MovieProvider>
  );
};

export default App;
