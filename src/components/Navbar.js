import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
   
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <>
      <nav  className="bg-black w-full h-20 text-white fixed flex justify-between px-4 items-center">
        <h1 className="font-greatVibes text-5xl">Ayaz</h1>
        <div >
          <ul className="hidden md:flex">
            {links.map((link) => (
              <li
                key={link.id}
                className="text-gray-500 px-3 cursor-pointer hover:scale-105 duration-200 capitalize"
              >
                <Link to={link.link} smooth duration={500}>{link.link}</Link>
              </li>
            ))}
          </ul>
          <div
            className="cursor-pointer pr-2 md:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <div>
            {nav && (
              <ul className="flex flex-col justify-center items-center absolute top-20 left-0  w-full h-screen bg-black  ">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="text-4xl py-3 cursor-pointer hover:text-white capitalize"
                  >
                    <Link onClick={closeNav} to={link.link} smooth duration={500}>{link.link}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
