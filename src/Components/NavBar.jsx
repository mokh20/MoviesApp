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
      className={`flex flex-col h-full  text-white fixed left-0 top-0 items-center z-50 ${
        isOpen ? "bg-[#222433f0] w-full" : "w-0"
      } sm:w-[200px] sm:bg-[#222433] `}
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
        } sm:block`}
      >
        Movies App
      </NavLink>
      <section
        className={`flex-col h-1/2 items-stretch w-full text-center  ${
          isOpen ? "flex" : "hidden"
        } sm:flex`}
      >
        {NavData.map((data) => (
          <NavLink
            end
            to={data.path}
            key={data.id}
            className="page hover:active-btn"
            activeclassname="active"
          >
            {data.title}
          </NavLink>
        ))}
      </section>
    </section>
  );
};

export default NavBar;
