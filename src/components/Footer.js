import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
const Footer = () => {
    return (
        <div className='pb-8 mt-7 mx-4 bg-back-blue bg-opacity-65 z-20 font-bold '>
            <p className='flex flex-col justify-center items-center  font-bold text-white text-base sm:text-lg md:text-lg lg:text-2xl neon-text-teal tracking-widest font-Changa'>GOT MORE DOUBTS ?</p>
            <p className='text-white font-Changa hover:-translate-y-1 mt-5 transition-transform duration-300 flex justify-center items-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-widest neon-text mb-9 font-changa'> CONTACT US !! </p>
                <p className='text-sm flex mt-3 mb-3 gap-4 lg:flex-row flex-wrap justify-center items-center sm:text-base md:text-lg lg:text-2xl text-shadow-custom' >
    
    <button className="btn font-Changa font-bold mt-3 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black flex items-center justify-center gap-2">
  <a 
    href="mailto:ideaforge@rajalakshmi.edu.in?subject=Hello&body=I%20would%20like%20to%20know%20more%20about..." 
    className="flex items-center" // Added flex here to ensure the link aligns its content
  >
    <svg
    className='pr-1'
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 48 48"
    >
      <path
        fill="#4caf50"
        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
      ></path>
      <path
        fill="#1e88e5"
        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
      ></path>
      <polygon
        fill="#e53935"
        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
      ></polygon>
      <path
        fill="#c62828"
        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
      ></path>
      <path
        fill="#fbc02d"
        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
      ></path>
    </svg>
     Email
  </a>
</button>

    <button className="z-20 font-Changa btn mt-3 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black flex items-center gap-2" onClick={() => window.open("https://www.instagram.com/idea_forge1.0/profilecard/?utm_source=qr&igsh=MTdkdTlqcXl3N2dzbg%3D%3D", "_blank")}>
  <svg
  
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 48 48"
  >
    <radialGradient
      id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
      cx="19.38"
      cy="42.035"
      r="44.899"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#fd5"></stop>
      <stop offset=".328" stopColor="#ff543f"></stop>
      <stop offset=".348" stopColor="#fc5245"></stop>
      <stop offset=".504" stopColor="#e64771"></stop>
      <stop offset=".643" stopColor="#d53e91"></stop>
      <stop offset=".761" stopColor="#cc39a4"></stop>
      <stop offset=".841" stopColor="#c837ab"></stop>
    </radialGradient>
    <path
      fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
    ></path>
    <radialGradient
      id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
      cx="11.786"
      cy="5.54"
      r="29.813"
      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#4168c9"></stop>
      <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
    </radialGradient>
    <path
      fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
    ></path>
    <path
      fill="#fff"
      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
    ></path>
    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
    <path
      fill="#fff"
      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
    ></path>
  </svg>

  INSTAGRAM
</button>

    

    <button class="btn mt-3 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black font-Changa "> Bhuwan - 6382403822
    </button>
    <button class="btn mt-3 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black font-Changa">Bhargav - 9043444670
    </button>
    
    </p>
    <p className='bg-transparent filer backdrop-blur-sm font-handjet tracking-widest mt-32 mx-6 flex text-sm sm:text-base md:text-md lg:text-lg xl:text-lg text-center justify-center items-center neon-text'>@CSBS</p>
    <p className='bg-transparent filer backdrop-blur-sm font-handjet tracking-widest mt-4 mx-6 flex text-sm sm:text-base md:text-md lg:text-lg xl:text-lg text-center justify-center items-center neon-text'>Website by @Kabelan E @Nadeem sheriff</p>
        </div>
        


    )
}

export default Footer