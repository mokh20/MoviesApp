import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavData = [
    { title: "Home", id: 1, path: "/" },
    { title: "All Movies", id: 2, path: "All" },
    { title: "Most Popular Movies", id: 3, path: "/Popular" },
    { title: "Upcoming Movies", id: 4, path: "/Upcoming" },
  ];
  return (
    <section
      className={`flex flex-col h-full text-white fixed left-0 top-0 items-center z-50 ${
        isOpen ? "bg-[#222433f0] w-full" : "w-0"
      } sm:h-16 sm:w-full sm:flex-row sm:bg-[#222433] `}
    >
      <button
        className="absolute text-lg left-4 top-4 bg-slate-600 p-2 rounded-full sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineMenu></AiOutlineMenu>
      </button>
      <NavLink
        to="/"
        className={`text-2xl font-bold m-8 bg-inherit border-none text-white hover:active-btn ${
          isOpen ? "block" : "hidden"
        } sm:block sm:ml-8 md:ml-10`}
      >
        <img
          src="/assets/MovieIcon.png"
          className="hidden w-8 sm:block"
          alt="MovieIcon"
        />
      </NavLink>
      <section
        className={`flex-col h-1/2 items-stretch w-full text-center mt-8 ${
          isOpen ? "flex" : "hidden"
        } sm:flex sm:flex-row sm:my-2 sm:items-center sm:gap-5 sm:ml-8 sm:text-xs md:gap-10 md:text-base`}
      >
        {NavData.map((data) => (
          <NavLink
            end
            to={data.path}
            key={data.id}
            className="page p-5 hover:active-btn"
            activeclassname="active sm:active-btn"
          >
            {data.title}
          </NavLink>
        ))}
      </section>
    </section>
  );
};

export default NavBar;
