import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      image: image1
    },
    {
      id: 1,
      image: image2
    },
    {
      id: 1,
      image: image3
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white min-h-screen"
    >
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <div>
          <p className="text-4xl font-extrabold mb-2">Portfolio</p>
          <p className="mb-6">Check out some of my work here</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {portfolios.map((links) => (
            <div key={links.id} className="border-2 border-solid border-gray-700 rounded-md">
              <img src={links.image} className="sm:w-full" alt="" />
              <div className="flex w-full justify-between">
                <button className="p-2 px-12  cursor-pointer">Demo</button>
                <button className="p-2 px-12  cursor-pointer">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
