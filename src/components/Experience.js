import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import figma from '../assets/figma.png';
import javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
  const icons = [
    { id: 1, image: html },
    { id: 2, image: css },
    { id: 3, image: figma },
    { id: 4, image: javascript },
    { id: 5, image: reactImg },
    { id: 6, image: tailwind },
  ];

  return (
    <div>
      <div
        name="experience"
        className="bg-customBackground text-white min-h-screen"
      >
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32">
          <div>
            <p className="text-4xl font-extrabold mb-2">Experience</p>
            <p className="mb-6">I have the following stack experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {icons.map((item) => (
              <div key={item.id} className="border-2 border-solid border-gray-700 rounded-md flex justify-center items-center">
                <img src={item.image} alt={`Logo for ${item.image}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
