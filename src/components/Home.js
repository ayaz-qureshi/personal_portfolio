import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='bg-customBackground flex justify-center items-center min-h-screen pt-24'>
      <div className='flex flex-col md:flex-row w-2/3 items-center md:items-start'>
        <div className='flex items-start justify-start flex-col text-white'>
          <h2 className='text-8xl font-bold mb-7 text-primaryColor'>
            I'm a React.js Front End Developer.
          </h2>
          <p className='text-2xl mb-7'>
            As a junior React.js developer, I am proficient in building modern, responsive user interfaces using React.js.
          </p>
          <Link to="portfolio" smooth={true} duration={500} className='group flex items-center mb-7 bg-primaryColor text-customBackground p-2 rounded-sm cursor-pointer'>
            <button className='text-left'>
              Portfolio
            </button>
            <span className='group-hover:rotate-90 ml-1 duration-200'>
              <IoIosArrowForward size={14} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
