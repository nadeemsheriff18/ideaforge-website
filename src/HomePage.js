import React from 'react';
import img from "./Screenshot 2024-10-10 154614-Photoroom.png";
import Bg from './Bg';

const HomePage = () => {
  return (
    <>
      <div className="relative flex justify-center items-center max-w-screen min-h-screen overflow-hidden">
        <Bg />
        <h1 className='text-white flex flex-col justify-center items-center  text-center'>
          {/* Centering the image and text */}
          <img className="w-1/2 lg:w-3/4 max-w-full" src={img} alt="IDEAFORGE 1.0" />
          <p className='text-3xl font-bold neon-text mt-4'>DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEM</p>
          <p className='text-2xl  neon-text tracking-widest font-bold mt-4'> <span className='text-3xl'>6</span> Hours Multi Domain Hackathon</p>
          <p className='text-2xl  neon-text-yellow tracking-widest font-bold mt-4'>  <span className='text-5xl'> 12,000&#8377; </span>Cash prize</p>
          <button class="btn mt-6"> REGISTER
</button>

        </h1>
      </div>

      {/* EVENT OVERVIEW Section */}
      <section>
        <p className='text-white flex justify-center items-center text-3xl font-bold tracking-widest neon-text mb-9'>
          EVENT OVERVIEW
        </p>

      </section>

      {/* Event Phases Section */}
      {/* Event Phases Section */}
<section className="flex gap-8 flex-col justify-center items-center">
  <div className="card">
    <div className="card2">
      <p className="text-white text-2xl font-bold">ROUND 1</p>
      <p className="text-white text-2xl font-bold">IDEATION PHASE</p>
      <p className="text-white text-xl font-bold">OCT 7 - OCT 14</p>
    </div>
  </div>
  
  <div className="card">
    <div className="card2">
      <p className="text-white text-2xl font-bold">DEVELOPMENT PHASE</p>
      <p className="text-white text-xl font-bold">OCT 16 - OCT 21</p>
    </div>
  </div>
  
  <div className="card">
    <div className="card2">
      <p className="text-white text-2xl font-bold">ROUND 2</p>
      <p className="text-white text-2xl font-bold">FINALE PHASE</p>
      <p className="text-white text-xl font-bold">&#128336; STAY TUNED</p>
    </div>
  </div>
</section>

      <section className=' pb-20'>
  <p className='text-white flex justify-center items-center text-3xl font-bold tracking-widest neon-text mb-9 mt-9'>
    FAQ
  </p>
  <div id="accordion-collapse" data-accordion="collapse" className='mx-48'>
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
        <p className="mb-2 pl-4 text-white">No entry fees, Free Registration.</p>
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
        <span>Can a team have less or more than 3 members?</span>
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
        <p className="mb-2 pl-4 text-white">No, The maximum and minimum is 3 members in a team.</p>
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
        <p className="mb-2 pl-4 text-white">No, It's an Intra-college event.</p>
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
        <p className="mb-2 pl-4 text-white">Yes, It's open to all departments.</p>
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
        <p className="mb-2 pl-4 text-white">Yes, Every year is allowed to participate.</p>
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
        <p className="mb-2 pl-4 text-white">Yes, OD will be provided for every participant.</p>
      </div>
    </div>
  </div>
</section>


        <section className='flex justify-center items-center mb-20'><button class="btn mt-6"> REGISTER
        </button></section>
    </>
  );
}

export default HomePage;
