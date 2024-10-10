import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        
<div className='flex bg-back-blue bg-opacity-75 gap-4 justify-around items-center px-4 py-2 flex-wrap '>
  <img
    src='/assets/reclogo.png'
    alt='rec'
    className=' h-10 w-12 sm:w-auto sm:h-24 mb-2 object-contain  flex-grow max-w-[150px] sm:max-w-[200px] md:max-w-[250px]'
  />
  <div>
  <Link to="/" className=" text-neon-bluy hover:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold hover:text-shadow-custom font-handjet tracking-widest">
    HOME
  </Link>
  </div>
  
        <div>

  <Link to="/themes"  className="text-neon-bluy hover:text-white  text-base sm:text-lg md:text-xl lg:text-2xl font-semibold  hover:text-shadow-custom font-handjet tracking-widest">
    THEMES
  </Link>
        </div>
  
  <img
    src='/assets/ideaforgelogo.png'
    alt='ideaforge'
    className='h-16 sm:h-20 md:h-24 mb-2 object-contain w-auto flex-grow max-w-[150px] sm:max-w-[200px] md:max-w-[300px]'
  />
</div>

    )
}

export default Navbar