import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
const Footer = () => {
    return (
        <div className='text-white w-full py-8 px-4 mt-5'>
            <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-6 md:gap-60'>

                {/* Right Section (Contact Info) */}
                <div className='flex flex-col md:flex-col gap-4'>
                    <h6 className='font-extrabold tracking-wide md:tracking-wider text-2xl text-center md:text-left md:font-mono md:text-4xl'>CONTACT</h6>

                    {/* Phone Contacts */}
                    <div className='flex flex-col gap-2 items-start justify-center md:flex-row md:items-start'>
                        <div className='flex items-center gap-2'>
                            <IoMdCall size={24} className='text-green-400' />
                            <div className='text-left'>
                                <p className='font-bold text-lg'>Bhuwan B - 6382403822</p>
                                <p className='font-bold text-lg'>Bhargav S P - 9043444670</p>
                            </div>
                        </div>
                    </div>

                    {/* Email Contact */}
                    <div className='flex items-center gap-2 md:pl-10'>
                        <SiGmail size={24} className='text-red-500' />
                        <p className='font-bold text-lg'>ideaforge@rajalakshmi.edu.in</p>
                    </div>
                </div>
                {/* Left Section (Instagram Icon) */}
                <a href='https://www.instagram.com/idea_forge1.0/profilecard/?utm_source=qr&igsh=MTdkdTlqcXl3N2dzbg%3D%3D'
                    className='text-pink-500 hover:text-pink-400 transition duration-300'>
                    <FaInstagram size={70} />
                </a>
            </div>
        </div>


    )
}

export default Footer