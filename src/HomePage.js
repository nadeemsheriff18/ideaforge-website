import React from 'react'

import Bg from './Bg'
const HomePage = () => {
  return (
    <>
    <div className="relative w-screen min-h-screen">
    <Bg/>
    <h1 className=' text-white flex justify-center items-center text-3xl' >IDEAFROGE</h1>
    </div>
    <section>
        <p className=' text-white flex justify-center items-center text-3xl font-bold' >ABOUT THE EVENT</p>
    </section>
    <section className='flex gap-8 flex-col justify-center items-center'>
    <div class="card ">
            <div class="card2 flex justify-center items-center flex-col">
                <p className='text-white text-2xl  font-bold'>ROUND 1</p>
                <p className='text-white text-2xl font-bold'>IDEATION PHASE</p>
                <p className='text-white text-xl font-bold'>OCT 7 - OCT 14</p>
            </div>
    </div>
    <div class="card  ">
    <div class="card2 flex justify-center items-center flex-col">
               
                <p className='text-white  text-2xl  font-bold'>DEVELOPMENT PHASE</p>
                <p className='text-white text-xl font-bold'>OCT 16 - OCT 21</p>
            </div>
    </div>
    <div class="card ">
    <div class="card2 flex justify-center items-center flex-col">
                <p className='text-white text-2xl  font-bold'>ROUND 2</p>
                <p className='text-white text-2xl font-bold'>FINALE PHASE</p>
                <p className='text-white text-xl font-bold'>&#128336; STAY TUNED</p>
            </div>
    </div>
    
    </section>
    
    
    </>
    
  )
}

export default HomePage