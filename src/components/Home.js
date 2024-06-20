import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {
  return (
    <div name="home"  className='bg-customBackground flex justify-center items-center min-h-screen pt-24'>
      <div className='flex flex-col md:flex-row w-2/3 items-center md:items-start'>
        <div className='flex items-start justify-start flex-col text-white '>
          <h2 className='text-8xl font-bold mb-7 text-primaryColor'>I'm a React.js Front End Developer.</h2>
          <p className='text-2xl'>As a junior React.js developer, I am proficient in building modern, responsive user interfaces using React.js.</p>
          <div className='group flex items-center bg-primaryColor  text-customBackground p-2 mt-5 sm:mt-20 rounded-sm'>
            <button className='text-left '>Portfolio </button><span className='group-hover:rotate-90 ml-1 duration-200'><IoIosArrowForward size={14} /></span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
