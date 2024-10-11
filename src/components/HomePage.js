import React, { useState } from 'react';
import { Link } from "react-router-dom";
import img from "./Screenshot 2024-10-10 154614-Photoroom.png";
import Bg from './Bg';

const HomePage = () => {
  // State to track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to toggle accordion open/close
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null); // Close the accordion if already open
    } else {
      setOpenAccordion(index); // Open the clicked accordion
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center max-w-screen min-h-screen overflow-hidden font-Poppins">
        <Bg />
        <h1 className='text-white flex flex-col justify-center items-center mx-4 gap-0  md:gap-2 xl:gap-3 text-center z-20 '>
          <p className='text-base sm:text-lg  md:text-xl lg:text-2xl mx-5 xl:text-3xl font-bold neon-text-teal  text-pretty font-handjet tracking-widest '>DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEM</p>
          <img className=" w-11/12 sm:w-11/12 md:w-9/12 xl:w-9/12 2xl:w-9/12 max-w-full mt-4" src={img} alt="IDEAFORGE 1.0" />
          
          <p className=' text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl neon-text tracking-widest font-bold mt-4 text-pretty font-Changa'> <span className='text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl'>6</span> HOURS MULTI DOMAIN HACKATHON</p>
          <p className='hover:-translate-y-1 transition-transform duration-300 text-xl font-handjet sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl neon-text-yellow tracking-widest font-bold mt-4 text-pretty'>  <span className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-handjet '>&#8377;12,000 </span>Cash Prize</p>
          <a
            className=" mt-7 -mb-4 z-20 font-Changa neon-text-green text-sm md:text-base xl:text-xl animate-rubble"
          >
            FREE REGISTRATION
          </a>
          <div className='flex gap-6 mt-2 flex-col sm:flex-row justify-center items-center'>
            <button className="btn mt-6 gap-6 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black font-Changa font-bold" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdSXaf0hRNj5VSnAydFDtiCegmmo00L0LYzm3ceDqMBFyc6QA/viewform", "_blank")}>
              REGISTER
            </button>
            <Link to="/themes">
              <button className="btn w-fit sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl hover:text-black font-Changa font-bold">
                VIEW PROBLEM STATEMENT
              </button>
            </Link>
          </div>
          <p className='mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl arrow neon-text '>&#8681;</p>
        </h1>
      </div>

      <section className='z-20'>
        <p className='text-white font-Changa flex justify-center items-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-widest neon-text mb-9'>
          EVENT OVERVIEW
        </p>
      </section>

      <section className='flex gap-8 flex-col justify-center items-center'>
        {/* Your event phases section */}
      </section>

      {/* FAQ Section with Accordions */}
      <section className='pb-20 z-40 font-Poppins font-semibold filter backdrop-blur-sm'>
        <p className='text-white font-Changa flex justify-center items-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-widest neon-text mt-9 mb-9'>
          FAQ...
        </p>
        <div id="accordion-collapse" className='mx-16  z-40 md:mx-24 lg:mx-48 xl:mx-96 bg-back-blue bg-opacity-80'>
          {[
            { question: "What's the entry fee?", answer: "NO fees, Free Registration." },
            { question: "Can a team have less or more than 3 members?", answer: "NO, The maximum and minimum is 3 members in a team." },
            { question: "Is it an inter-College event?", answer: "NO, It's an Intra-college event." },
            { question: "Can any department participate?", answer: "YES, It's open to all departments." },
            { question: "Can any year participate?", answer: "YES, Every year is allowed to participate." },
            { question: "Will OD be provided?", answer: "YES, OD will be provided for every participant." }
          ].map((item, index,items) => (
            <div key={index}>
              <h2 id={`accordion-collapse-heading-${index}`} className='z-40'>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-1 border-gray-200 ${
                    index === 0 ? 'rounded-t-xl' : index === items.length - 1 ? '' : ''
                  } bg-transparent gap-3`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openAccordion === index}
                >
                  <span className='font-bold flex text-left'>{item.question}</span>
                  <svg
                    className={`w-3 h-3 shrink-0 ${openAccordion === index ? 'rotate-180' : ''}`}
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
              {openAccordion === index && (
                <div id={`accordion-collapse-body-${index}`} aria-labelledby={`accordion-collapse-heading-${index}`}>
                  <div className="p-5 border border-b-1 z-40  border-gray-200 bg-transparent">
                    <p className="mb-2 pl-4 text-white">
                      &#8594; <span className='font-semibold'>{item.answer}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className='flex justify-center md:text-lg items-center mb-20'>
        <div className='flex mt-6 flex-col sm:flex-row justify-center items-center gap-6'>
          <button className="btn w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black font-Changa font-bold" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdSXaf0hRNj5VSnAydFDtiCegmmo00L0LYzm3ceDqMBFyc6QA/viewform", "_blank")}>
            REGISTER
          </button>
          <Link to="/themes">
            <button className="btn w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black font-Changa font-bold">
              VIEW PROBLEM STATEMENT
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
