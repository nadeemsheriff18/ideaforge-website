import React, { useState } from 'react';
import { MdHealthAndSafety } from "react-icons/md";
import { MdAgriculture } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { MdPrecisionManufacturing } from "react-icons/md";
import Footer from './Footer';
import Navbar from './Navbar';
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
        <div
            className="bg-cover bg-center min-h-screen text-white py-6 px-4"
            style={{ backgroundImage: "url('/assets/background.jpg')" }}
        >
            {/* Header Section */}
            <div className="text-center mb-12">
                <Navbar />
                <h2 className="text-xl md:text-xl font-bold uppercase tracking-widest mb-4">
                    Department of Computer Science and Business Systems
                </h2>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-purple-300 mb-4">
                    IdeaForge 1.0
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold text-pink-500">
                    Prize Pool - ₹12,000/-
                </h3>
            </div>

            {/* Themes Section */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-extrabold font-mono tracking-wider text-center mb-8">Themes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                    {/* Healthcare */}
                    <div
                        className={`flex flex-col items-center p-4 border-4 border-[#08fdff] rounded-lg hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Healthcare')}
                    >
                        <MdHealthAndSafety size={40} />
                        <h3 className="text-xl font-bold">Healthcare</h3>
                        {expandedTheme === 'Healthcare' && (
                            <p className="text-center mt-4 font-bold text-lg">
                                Build an AI tool that analyzes changes in speech
                                patterns, vocabulary, and other behavioral cues to
                                detect early signs of cognitive decline, such as
                                Alzheimer’s, enabling timely interventions and care
                                planning
                            </p>
                        )}
                    </div>

                    {/* Agriculture */}
                    <div
                        className={`flex flex-col items-center p-4 border-4 border-[#08fdff] rounded-lg hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Agriculture')}
                    >
                        <MdAgriculture size={40} />
                        <h3 className="text-xl font-bold">Agriculture</h3>
                        {expandedTheme === 'Agriculture' && (
                            <p className="text-center mt-4 font-bold text-lg">
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
                        className={`flex flex-col items-center p-4 border-4 border-[#08fdff] rounded-lg hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Social Responsibility')}
                    >
                        <FaPeopleGroup size={40} />
                        <h3 className="text-xl font-bold">Social Responsibility</h3>
                        {expandedTheme === 'Social Responsibility' && (
                            <p className="text-center mt-4 font-bold text-lg">
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
                        className={`flex flex-col items-center p-4 border-4 border-[#08fdff] rounded-lg hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Financial Inclusion')}
                    >
                        <GiTakeMyMoney size={40} />
                        <h3 className="text-xl font-bold">Financial Inclusion</h3>
                        {expandedTheme === 'Financial Inclusion' && (
                            <p className="text-center mt-4 font-bold text-lg">
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
                        className={`flex flex-col items-center p-4 border-4 border-[#08fdff] rounded-lg hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Smart Automation')}
                    >
                        <MdPrecisionManufacturing size={40} />
                        <h3 className="text-xl font-bold">Smart Automation</h3>
                        {expandedTheme === 'Smart Automation' && (
                            <p className="text-center mt-4 font-bold text-lg">
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
                        className={`flex flex-col items-center p-4 border-4 border-[#08fdff] rounded-lg hover:bg-[#75e6e4] transition duration-300 ease-in-out cursor-pointer`}
                        onClick={() => toggleExpand('Smart Education')}
                    >
                        <GiBrain size={40} />
                        <h3 className="text-xl font-bold">Smart Education</h3>
                        {expandedTheme === 'Smart Education' && (
                            <p className="text-center mt-4 font-bold text-lg">
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
            <div className='flex flex-col items-center py-7 gap-4'>
                <h2 className='font-mono font-extrabold text-[40px] text-pink-500'>FREE REGISTRATION</h2>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdSXaf0hRNj5VSnAydFDtiCegmmo00L0LYzm3ceDqMBFyc6QA/viewform'><button className='rounded-3xl p-3 bg-white text-black text-xl font-extrabold hover:bg-[#f76de2] transition duration-300 ease-in-out cursor-pointer'>REGISTER</button></a>
            </div>
            
            <Footer />
        </div>
    );
};

export default Themes;
