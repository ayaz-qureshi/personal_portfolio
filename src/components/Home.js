import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Heri from '../assets/Heri.png';

const Home = () => {
  return (
    <div name="home"  className='bg-gradient-to-t from-black to-slate-900  flex justify-center items-center min-h-screen pt-24'>
      <div className='flex flex-col md:flex-row w-2/3 items-center md:items-start'>
        <div className='flex items-start justify-start flex-col text-white '>
          <h2 className='text-5xl font-bold mb-7'>I'm a React.js Developer</h2>
          <p>As a junior React.js developer, I am proficient in building modern, responsive user interfaces using React.js.</p>
          <div className='group flex items-center bg-blue-800 p-2 mt-5 sm:mt-20 rounded-sm'>
            <button className='text-left'>Portfolio </button><span className='group-hover:rotate-90 ml-1 duration-200'><IoIosArrowForward size={14} /></span>
          </div>
        </div>
        <div className='mt-5 md:mt-0'>
          <img className='md:mb-0' src={Heri} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
