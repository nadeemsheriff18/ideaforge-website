import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between px-12 py-2'>
            <img src='/assets/reclogo.png' alt='rec' className='h-24 mb-2' />
            <img src='/assets/ideaforgelogo.png' alt='ideaforge' className='h-32 mb-2' />
        </div>
    )
}

export default Navbar