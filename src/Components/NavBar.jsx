import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const windowScroll = () => {
    if (window.scrollY >= 64) setIsScroll(true);
    else setIsScroll(false);
  };
  window.addEventListener("scroll", windowScroll);

  const NavData = [
    { title: "Home", id: 1, path: "/" },
    { title: "All Movies", id: 2, path: "All" },
    { title: "Most Popular Movies", id: 3, path: "/Popular" },
    { title: "Upcoming Movies", id: 4, path: "/Upcoming" },
  ];
  return (
    <section
      className={`flex flex-col h-full text-white fixed left-0 top-0 items-center z-10 ${
        isScroll
          ? "bg-clip-padding backdrop-filter backdrop-blur-md bg-[#222433c3]"
          : ""
      } ${
        isOpen ? "bg-[#222433f0] w-full" : "w-0"
      } sm:h-16 sm:w-full sm:flex-row sm:shadow-navBar transition-all duration-700 ease-in-out`}
    >
      <button
        className="absolute text-lg left-4 top-4 bg-slate-600 p-2 rounded-full sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu></AiOutlineMenu>
      </button>
      <NavLink
        to="/"
        className={`text-2xl bg-transparent font-bold m-8 border-none text-white hover:active-btn ${
          isOpen ? "block" : "hidden"
        } sm:block sm:ml-8 md:ml-10`}
      >
        <img
          src="/assets/MovieIcon.png"
          className="hidden w-8 sm:block "
          alt="MovieIcon"
        />
      </NavLink>
      <section
        className={`flex-col h-1/2 items-stretch w-full text-center mt-8 ${
          isOpen ? "flex" : "hidden"
        } sm:flex sm:flex-row sm:my-2 sm:items-center sm:ml-8 sm:text-xs md:text-base`}
      >
        {NavData.map((data) => (
          <NavLink
            end
            to={data.path}
            key={data.id}
            className="text-[#7a8197] sm:text-white py-6 sm:py-1 sm:px-6 md:px-5  hover:active-btn"
            activeclassname={`${isOpen ? "active" : ""}`}
          >
            {data.title}
          </NavLink>
        ))}
      </section>
    </section>
  );
};

export default NavBar;
