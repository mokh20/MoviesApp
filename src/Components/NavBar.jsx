import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
  RiFilmLine,
  RiFilmFill,
  RiUserLine,
  RiUserFill,
  RiSearchLine,
  RiSearchFill,
} from "react-icons/ri";
import {
  PiTelevisionSimpleLight,
  PiTelevisionSimpleFill,
} from "react-icons/pi";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const windowScroll = () => {
      setIsScroll(window.scrollY >= 50);
    };

    window.addEventListener("scroll", windowScroll);

    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  return (
    <section
      className={`flex justify-center bg-slate-800 sm:bg-transparent h-16 w-full  text-white fixed bottom-0 items-center z-10 ${
        isScroll &&
        "bg-clip-padding backdrop-filter backdrop-blur-xl bg-[#222433c3]"
      }  sm:top-0 shadow-navBar sm:justify-start  sm:bg-gradient-to-b sm:from-10% sm:from-primaryColor sm:to-transparent transition-all duration-500 ease-in-out`}
    >
      <NavLink
        to="/"
        className={`hidden text-2xl bg-transparent font-bold m-8 border-none text-white hover:active-btn 
         sm:block sm:ml-8 md:ml-10`}
      >
        <img
          src="/assets/MovieIcon.png"
          className="hidden w-8 sm:block "
          alt="MovieIcon"
        />
      </NavLink>
      <section className="flex w-full justify-between text-center items-center sm:my-2 sm:ml-8 sm:text-xs md:text-base">
        <RenderNavBar />
      </section>
    </section>
  );
};

export default NavBar;

const RenderNavBar = () => {
  const location = useLocation();
  const NavTitle = [
    { title: "Home", id: 1, path: "/" },
    { title: "Movies", id: 2, path: "All" },
    { title: "TvShows", id: 3, path: "/Popular" },
    { title: "Upcoming Movies", id: 4, path: "/Upcoming" },
  ];

  const NavData = [
    { title: "Home", id: 1, path: "/" },
    { title: "All Movies", id: 2, path: "All" },
    { title: "Most Popular Movies", id: 3, path: "/Popular" },
    { title: "Upcoming Movies", id: 4, path: "/Upcoming" },
  ];

  const NavDataMobile = [
    { title: <GoHome />, filledTitle: <GoHomeFill />, id: 1, path: "/" },
    {
      title: <RiFilmLine />,
      filledTitle: <RiFilmFill />,
      id: 2,
      path: "/Movie",
    },
    {
      title: <RiSearchLine />,
      filledTitle: <RiSearchFill />,
      id: 3,
      path: "/Search",
    },
    {
      title: <PiTelevisionSimpleLight />,
      filledTitle: <PiTelevisionSimpleFill />,
      id: 4,
      path: "/TvShow",
    },
    {
      title: <RiUserLine />,
      filledTitle: <RiUserFill />,
      id: 5,
      path: "/User",
    },
  ];

  const isPathActive = (path) => {
    return location.pathname === path;
  };
  return (
    <section className="w-full">
      <section className="flex w-full justify-evenly sm:hidden">
        {NavDataMobile.map((data) => (
          <NavLink
            end
            to={data.path}
            key={data.id}
            className="text-[#7a8197] text-2xl flex justify-center w-full px-3 py-6"
          >
            {isPathActive(data.path) ? data.filledTitle : data.title}
          </NavLink>
        ))}
      </section>
      <section className="hidden sm:flex w-full items-center justify-between pr-20">
        <section>
          {NavTitle.map((data) => (
            <NavLink
              end
              to={data.path}
              key={data.id}
              className="text-slate-300 py-2 px-6 md:px-5 hover:active-btn"
            >
              {data.title}
            </NavLink>
          ))}
        </section>
        <span className="h-7 w-7 border-2 text-sm rounded-full flex justify-center items-center cursor-pointer md:text-lg md:w-9 md:h-9  hover:bg-[#01a2ff] hover:text-black hover:border-none transition-colors duration-500">
          <RiSearchLine />
        </span>
      </section>
    </section>
  );
};
