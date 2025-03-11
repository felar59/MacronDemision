import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(() => {
    return JSON.parse(localStorage.getItem("isOpen")) || false;
  });

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      localStorage.setItem("isOpen", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <nav className="lg:fixed w-full top-0 z-10 p-5 bg-white text-green-700 border-b-[2px] border-VertDoux">
      <div className="flex justify-between items-end">
        <div className="text-2xl font-bold">Logo</div>

        {/* Bouton pour ouvrir le menu sur petits écrans */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Icône du bouton */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`transition duration-100 ease-linear ${
                isOpen
                  ? "ring-2 ring-gray-200 rounded-lg bg-gray-100"
                  : "border-none rounded-lg"
              } h-6 w-6`}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu visible sur écrans moyens et plus grands */}
        <div className="hidden lg:flex space-x-14 mr-[5%]">
          <NavLink
            to="/Accueil"
            className={({ isActive }) =>
              `NavButton ${isActive ? "NavButtonSelect" : ""}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              `NavButton ${isActive ? "NavButtonSelect" : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/A-Propos"
            className={({ isActive }) =>
              `NavButton ${isActive ? "NavButtonSelect" : ""}`
            }
          >
            À propos
          </NavLink>
          <NavLink
            to="/Temoignages"
            className={({ isActive }) =>
              `NavButton ${isActive ? "NavButtonSelect" : ""}`
            }
          >
            Témoignages
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `NavButton ${isActive ? "NavButtonSelect" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Menu qui s'affiche sur petits écrans*/}
      {isOpen && (
        <div className="lg:hidden mt-4 p-1 grid border rounded bg-gray-100">
          <NavLink
            to="/Accueil"
            className={({ isActive }) =>
              `NavButton2 ${isActive ? "NavButtton2Select" : ""}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              `NavButton2 ${isActive ? "NavButtton2Select" : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/A-Propos"
            className={({ isActive }) =>
              `NavButton2 ${isActive ? "NavButtton2Select" : ""}`
            }
          >
            À propos
          </NavLink>
          <NavLink
            to="/Temoignages"
            className={({ isActive }) =>
              `NavButton2 ${isActive ? "NavButtton2Select" : ""}`
            }
          >
            Témoignages
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `NavButton2 ${isActive ? "NavButtton2Select" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
