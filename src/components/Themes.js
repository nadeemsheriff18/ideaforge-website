import React, { useState } from 'react';
import Bg from './Bg';
import img from "./Screenshot 2024-10-10 154614-Photoroom.png";
import { MdHealthAndSafety } from "react-icons/md";
import { MdAgriculture } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { MdPrecisionManufacturing } from "react-icons/md";

const Themes = () => {
    // State to keep track of which theme is expanded
    const [expandedTheme, setExpandedTheme] = useState(null);

    // Toggle function to expand/collapse the theme
    const toggleExpand = (theme) => {
        if (expandedTheme === theme) {
            setExpandedTheme(null); // Collapse if clicked again
        } else {
            setExpandedTheme(theme); // Expand the clicked theme
        }
    };

    return (
        <>
        <div className="relative flex justify-center items-center  max-w-screen pt-5 pb-5 md:pt-2  md:min-h-screen overflow-hidden font-Poppins">
        <Bg />
        <h1 className='text-white flex flex-col justify-center items-center mx-4 gap-0  md:gap-2 xl:gap-3 text-center z-20 '>
          {/* Centering the image and text */}
          <p className='text-base sm:text-lg  md:text-xl lg:text-2xl mx-5 xl:text-3xl font-bold neon-text-teal  text-pretty font-handjet tracking-widest '>DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEM</p>
          <img className=" w-11/12 sm:w-11/12 md:w-9/12 xl:w-9/12 2xl:w-9/12 max-w-full mt-4" src={img} alt="IDEAFORGE 1.0" />
          
          <p className=' text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl neon-text tracking-widest font-bold mt-4 text-pretty font-Changa'> <span className='text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl'>6</span> HOURS MULTI DOMAIN HACKATHON</p>
          <p className='hover:-translate-y-1 transition-transform duration-300 text-xl font-handjet sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl neon-text-yellow tracking-widest font-bold mt-4 text-pretty'>  <span className='text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-handjet '>&#8377;12,000 </span>Cash Prize</p>
          <div className='flex gap-6 flex-col sm:flex-col justify-center items-center'>
          <a
  className=" mt-3 z-20 font-Changa neon-text-teal text-sm md:text-base xl:text-xl animate-rubble"
>
  FREE REGISTRATION
</a>
          <button class="btn  -mt-3 mb-6 gap-6 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black font-Changa font-bold" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdSXaf0hRNj5VSnAydFDtiCegmmo00L0LYzm3ceDqMBFyc6QA/viewform", "_blank")}> REGISTER
        
          </button>
         
          </div>
          <a
  className="neon-text-green mt-3 z-20 font-Changa  text-sm md:text-base xl:text-xl animate-rubble"
  href="/assets/IDEAFORGE PPT TEMPLATE.pptx"
  download="PPT_template_IDEAFORGE_1.0.pptx"
>
  Download the PPT TEMPLATE
</a>

<a className='neon-text-green mt-3 z-20 font-Changa  text-sm md:text-base xl:text-xl animate-rubble' href="/assets/Problem Statements.pdf" download="Problem_Statements.pdf">
  Download the PROBLEM STATEMENT
</a>
<p className=' mt-5 text-xl sm:text-2xl lg:text-3xl xl:text-4xl arrow neon-text invisible sm:visible'>&#8681;</p>      
        </h1>
      </div>
        <div
            className=" max-w-screen text-white py-6 px-4"
            
        >
        
          
           
{/*             
            <div className='flex flex-col items-center py-7 gap-4'>
                <h2 className='text-white font-Changa hover:-translate-y-2 mx-auto transition-transform duration-300 flex justify-center items-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest neon-text mb-9'>FREE REGISTRATION</h2>
                <button class="btn  mt-6 gap-6 w-fit text-sm sm:text-base md:text-lg lg:text-xl hover:text-black " onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdSXaf0hRNj5VSnAydFDtiCegmmo00L0LYzm3ceDqMBFyc6QA/viewform", "_blank")}>  REGISTER
</button>
            </div> */}
          
            {/* Themes Section */}
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-white font-Changa hover:-translate-y-2 mx-auto transition-transform duration-300 flex justify-center items-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest neon-text mb-9">THEMES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                    {/* Healthcare */}
                    <button>
                    <div
                        className={`flex filer backdrop-blur-sm flex-col items-center p-4 border-4 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] rounded-lg   hover:text-back-blue hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Healthcare')}
                    >
                        <MdHealthAndSafety size={40} />
                        <h3 className="text-xl font-bold font-Poppins tracking-wider">Healthcare</h3>
                        
                        {expandedTheme === 'Healthcare' && (
                            <p className="text-center mt-4 font-bold text-lg font-changa">
                                Build an AI tool that analyzes changes in speech
                                patterns, vocabulary, and other behavioral cues to
                                detect early signs of cognitive decline, such as
                                Alzheimer’s, enabling timely interventions and care
                                planning
                            </p>
                        )}
                    </div>
                    </button>

                    {/* Agriculture */}
                    <div
                        className={`flex filer backdrop-blur-sm flex-col items-center p-4 border-4 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] rounded-lg  hover:text-back-blue hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Agriculture')}
                    >
                        <MdAgriculture size={40} />
                        <h3 className="text-xl font-bold font-Poppins tracking-wider">Agriculture</h3>
                        {expandedTheme === 'Agriculture' && (
                            <p className="text-center mt-4 font-bold text-lg font-changa ">
                                Agriculture lacks cost-effective systems to improve
                                mechanization in processes like planting, weeding, and
                                harvesting, especially in hilly and protected cultivation.
                                Additionally, current technologies for assessing, grading,
                                and processing agri-produce are inefficient, limiting
                                productivity and quality control.
                            </p>
                        )}
                    </div>

                    {/* Social Responsibility */}
                    <div
                        className={`flex filer backdrop-blur-sm flex-col items-center p-4 border-4 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] rounded-lg  hover:text-back-blue hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Social Responsibility')}
                    >
                        <FaPeopleGroup size={40} />
                        <h3 className="text-xl font-bold font-Poppins tracking-wider">Social Responsibility</h3>
                        {expandedTheme === 'Social Responsibility' && (
                            <p className="text-center mt-4 font-bold text-lg font-changa ">
                                How can we develop a crowdsourced platform that empowers
                                communities, volunteers, and conservationists to report and
                                monitor real-time environmental changes, wildlife activity, and
                                animal migration patterns? The platform should allow users to
                                report incidents such as environmental damage, wildlife sightings,
                                or migration events, helping to inform conservation efforts, promote
                                sustainability, and protect endangered species and ecosystems.
                            </p>
                        )}
                    </div>

                    {/* Financial Inclusion */}
                    <div
                        className={`flex filer backdrop-blur-sm flex-col items-center p-4 border-4 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] rounded-lg  hover:text-back-blue hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Financial Inclusion')}
                    >
                        <GiTakeMyMoney size={40} />
                        <h3 className="text-xl font-bold font-Poppins tracking-wider">Financial Inclusion</h3>
                        {expandedTheme === 'Financial Inclusion' && (
                            <p className="text-center mt-4 font-bold text-lg font-changa ">
                                Create a personalized financial planning platform for
                                retirees and pre-retirees, offering AI-driven tools to help
                                them achieve financial security in retirement. The platform
                                will focus on improving retirement adequacy, managing
                                savings, investments, and healthcare costs, while enhancing
                                financial literacy as the population becomes more affluent.
                            </p>
                        )}
                    </div>

                    {/* Smart Automation */}
                    <div
                        className={`flex filer backdrop-blur-sm flex-col items-center p-4 border-4 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] rounded-lg  hover:text-back-blue hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Smart Automation')}
                    >
                        <MdPrecisionManufacturing size={40} />
                        <h3 className="text-xl font-bold font-Poppins tracking-wider">Smart Automation</h3>
                        {expandedTheme === 'Smart Automation' && (
                            <p className="text-center mt-4 font-bold text-lg font-changa ">
                                Businesses struggle to create effective strategies due to
                                insufficient insights into market dynamics and competitor
                                behavior. An AI-powered platform that automates business
                                model generation, market fit assessment, and competitive
                                analysis can help companies make informed decisions and
                                enhance their market positioning for sustainable growth
                            </p>
                        )}
                    </div>

                    {/* Smart Education */}
                    <div
                        className={`flex filer backdrop-blur-sm flex-col items-center p-4 border-4  border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] rounded-lg  hover:text-back-blue  hover:bg-[#3ad2d0] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Smart Education')}
                    >
                        <GiBrain size={40} />
                        <h3 className="text-xl font-bold font-Poppins tracking-wider">Smart Education</h3>
                        {expandedTheme === 'Smart Education' && (
                            <p className="text-center mt-4 font-bold text-lg font-changa ">
                                Design a tool to help students with dyslexia or other reading
                                challenges. Consider how your solution can adjust reading
                                materials to improve comprehension, possibly through
                                different modes of interaction or personalization. Think about
                                how to integrate this into existing learning environments
                                while addressing the specific needs of these students
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/*Registration*/}
            
            
          
        </div>
        </>
        
    );
};

export default Themes;
