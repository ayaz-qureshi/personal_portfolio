import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ayazLogo from "../assets/ayazLogo.svg"

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
      <nav  className="bg-customBackground w-full h-20 shadow-lg text-white fixed flex justify-between px-24 items-center">
        <img src={ayazLogo} alt="" className="h-8 w-auto "/>
        {/* <h1 className="font-greatVibes text-5xl">Ayaz</h1> */}
        <div >
          <ul className="hidden md:flex ">
            {links.map((link) => (
              <li
                key={link.id}
                className="text-gray-500 font-inter text-base font-normal px-3 cursor-pointer hover:text-primaryColor duration-200 capitalize"
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
              <ul className="flex flex-col justify-center items-center absolute top-20 left-0  w-full h-screen bg-customBackground  ">
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
