import React from 'react';
import img from "./Screenshot 2024-10-10 154614-Photoroom.png";
import Bg from './Bg';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
    <Navbar />
      <div className="relative flex justify-center items-center max-w-screen min-h-screen overflow-hidden">
        <Bg />
        <h1 className='text-white flex flex-col justify-center items-center mx-4 gap-0  md:gap-2 xl:gap-3 text-center'>
          {/* Centering the image and text */}
          <img className="w-11/12 sm:w-11/12 md:w-9/12 xl:w-9/12 2xl:w-11/12 max-w-full" src={img} alt="IDEAFORGE 1.0" />
          <p className='text-base sm:text-lg  md:text-xl lg:text-2xl mx-5 xl:text-3xl font-bold neon-text mt-4 text-pretty'>DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEM</p>
          <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl neon-text tracking-widest font-bold mt-4 text-pretty'> <span className='text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl'>6</span> Hours Multi Domain Hackathon</p>
          <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl neon-text-yellow tracking-widest font-bold mt-4 text-pretty'>  <span className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl '> 12,000&#8377; </span>Cash prize</p>
          <div className='flex gap-6 flex-col sm:flex-row justify-center items-center'>
          <button class="btn  mt-6 gap-6 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black ">  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSXaf0hRNj5VSnAydFDtiCegmmo00L0LYzm3ceDqMBFyc6QA/viewform" target="_blank" rel="noreferrer" >REGISTER</a>
       
</button>
<Link to="/themes"><button class="btn w-fit sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl hover:text-black "> VIEW PROBLEM STATEMENT
</button></Link>
          </div>
          <p className='mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl arrow neon-text-red '>&#8681;</p>
        </h1>
      </div>

      {/* EVENT OVERVIEW Section */}
      <section> 
      <p className='text-white hover:scale-105 transition-transform duration-300 flex justify-center items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-widest neon-text mb-9'>
  EVENT OVERVIEW
</p>


      </section>

      {/* Event Phases Section */}
      {/* Event Phases Section */}
  
<section className='flex gap-8 flex-col justify-center items-center'>

  <div className="w-2/3 h-[240px] md:w-[490px] sm:h-[230px] md:h-[260px] lg:h-[300px] bg-transparent border-2 border-transparent rounded-xl hover:border-[#08fdff] transition-all duration-300">
    <div className="w-full h-full gap-3 bg-[#132f6f] hover:bg-back-blue  bg-opacity-80 rounded-xl flex flex-col justify-center items-center transition-all duration-300">
      <p className="neon-text text-xl sm:text-2xl md:text-2xl xl:text-3xl font-bold">ROUND 1</p>
      <p className="neon-text-yellow2 text-lg sm:text-2xl md:text-2xl xl:text-3xl font-bold">IDEATION PHASE</p>
      <p className="text-white text-lg md:text-xl xl:text-2xl font-bold">OCT 7 - OCT 14</p>
      <a className='neon-text-red2' href="/IDEAFORGE%20PPT%20TEMPLATE.pptx" download="PPT_template_IDEAFORGE_1.0.pptx">
  Download the PPT TEMPLATE
</a>
<Link to="/themes"><p className='neon-text-red'> View Problem Statement</p></Link>
   

    </div>
    
    
    
  </div>

  
  <div className="w-2/3 h-[240px] md:w-[490px] sm:h-[230px] md:h-[260px] lg:h-[300px] bg-transparent border-2 border-transparent rounded-xl hover:border-[#08fdff] transition-all duration-300">
    <div className="w-full h-full gap-3  bg-[#132f6f] hover:bg-back-blue bg-opacity-80 rounded-xl flex flex-col justify-center items-center transition-all duration-300">
      <p className="neon-text-yellow2 text-xl sm:text-2xl md:text-2xl xl:text-3xl font-bold">DEVELOPMENT PHASE</p>
      <p className="text-white text-lg md:text-xl xl:text-2xl font-bold">OCT 16 - OCT 21</p>
    </div>
  </div>

 
  <div className="w-2/3 h-[240px] md:w-[490px] sm:h-[230px] md:h-[260px] lg:h-[300px] bg-transparent border-2 border-transparent rounded-xl hover:border-[#08fdff] transition-all duration-300">
    <div className="w-full h-full  gap-3 bg-[#132f6f] hover:bg-back-blue bg-opacity-80  rounded-xl flex flex-col justify-center items-center transition-all duration-300">
      <p className="neon-text text-xl sm:text-2xl md:text-2xl xl:text-3xl  font-bold">ROUND 2</p>
      <p className="neon-text-yellow2 text-lg sm:text-2xl md:text-2xl xl:text-3xl font-bold">FINALE PHASE</p>
      <p className="text-white text-lg md:text- xl:text-2xl font-bold">&#128336;STAY TUNED...</p>
    </div>
  </div>
</section>



      <section className=' pb-20'>
  <p className='text-white flex hover:scale-105 transition-transform duration-300 justify-center items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest neon-text mb-9 mt-9'>
    FAQ...
  </p>
  <div id="accordion-collapse" data-accordion="collapse" className='mx-16 md:mx-24 lg:mx-48 xl:mx-96 bg-back-blue bg-opacity-80'>
    <h2 id="accordion-collapse-heading-1">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl bg-transparent gap-3"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span>What's the entry fee?</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
      <div className="p-5 border border-b-0 border-gray-200 bg-transparent">
        <p className="mb-2 pl-4 text-white">&#8594; <span className='font-bold'>NO</span> fees, Free Registration.</p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-2">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 bg-transparent gap-3"
        data-accordion-target="#accordion-collapse-body-2"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-2"
      >
        <span  >Can a team have less or more than 3 members?</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
      <div className="p-5 border border-b-0 border-gray-200 bg-transparent">
        <p className="mb-2 pl-4 text-white">&#8594; <span className='font-bold'>NO</span>, The maximum and minimum is 3 members in a team.</p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-3">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 bg-transparent gap-3"
        data-accordion-target="#accordion-collapse-body-3"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-3"
      >
        <span>Is it an inter-College event?</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
      <div className="p-5 border border-b-0 border-gray-200 bg-transparent">
        <p className="mb-2 pl-4 text-white">&#8594; <span className='font-bold'>NO</span>, It's an Intra-college event.</p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-4">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 bg-transparent gap-3"
        data-accordion-target="#accordion-collapse-body-4"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-4"
      >
        <span>Can any department participate?</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
      <div className="p-5 border border-b-0 border-gray-200 bg-transparent">
        <p className="mb-2 pl-4 text-white">&#8594; <span className='font-bold'>YES</span>, It's open to all departments.</p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-5">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 bg-transparent gap-3"
        data-accordion-target="#accordion-collapse-body-5"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-5"
      >
        <span>Can any year participate?</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
      <div className="p-5 border border-b-0 border-gray-200 bg-transparent">
        <p className="mb-2 pl-4 text-white">&#8594; <span className='font-bold'>YES</span>, Every year is allowed to participate.</p>
      </div>
    </div>

    <h2 id="accordion-collapse-heading-6">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 border-b font-medium rtl:text-right text-white border  border-gray-200 bg-transparent gap-3"
        data-accordion-target="#accordion-collapse-body-6"
        aria-expanded="false"
        aria-controls="accordion-collapse-body-6"
      >
        <span>Will OD be provided?</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
      <div className="p-5 border border-b border-gray-200 bg-transparent">
        <p className="mb-2 pl-4 text-white">&#8594; <span className='font-bold'>YES</span>, OD will be provided for every participant.</p>
      </div>
    </div>
    <p className='flex flex-col justify-center items-center mt-7 font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl' >GOT MORE DOUBTS ?
    <button class="btn mt-5 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black"> <a href="mailto:ideaforge@rajalakshmi.edu.in?subject=Hello&body=I%20would%20like%20to%20know%20more%20about..." >
            Email Us
        </a>

    </button>
    
    <button class="btn mt-3 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black"> <a href='https://www.instagram.com/idea_forge1.0/profilecard/?utm_source=qr&igsh=MTdkdTlqcXl3N2dzbg%3D%3D' target="_blank" rel="noreferrer">INSTAGRAM</a>
    </button>
    

    <button class="btn mt-3 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black"> Bhuwan - 6382403822
    </button>
    <button class="btn mt-3 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black">Bhargav - 9043444670
    </button>
    
    </p>
  </div>
  
</section>


        <section className='flex  justify-center md:text-lg items-center mb-20'><div className='flex  mt-6 flex-col sm:flex-row justify-center items-center  gap-6'>
          <button class="btn  w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black "> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSXaf0hRNj5VSnAydFDtiCegmmo00L0LYzm3ceDqMBFyc6QA/viewform" target="_blank" rel="noreferrer">REGISTER</a>
       
</button>
<Link to="/themes"><button class="btn w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black "> VIEW PROBLEM STATEMENT
</button></Link>
          </div></section>
    </>
  );
}

export default HomePage;