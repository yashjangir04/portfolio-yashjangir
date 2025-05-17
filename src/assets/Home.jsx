import React from 'react'
import img1 from './Images/spiral-bg1.jpg'
import img2 from './Images/mypic.jpg'
import img3 from './Images/fire.jpg'
import img4 from './Images/kota.jpg'
import img5 from './Images/birthday.jpg'

const Home = () => {
  return (
    <div id='home'>
        {/* <img src={img1} alt="backdrop" className='w-full fixed top-10 z-0'/> */}
        <div className="w-full h-screen flex flex-col md:py-0 py-25 md:flex-row px-8 md:px-24 justify-between items-center md:gap-4 mt-10 bg-[#00000089] backdrop-blur-3xl">
            <div className="home-left flex flex-col justify-center border-0 border-zinc-700 w-full text-center md:text-left">
                <h1 className='text-white neue text-4xl md:text-8xl '>Hey there,</h1>
                <h1 className='text-white neue text-4xl md:text-8xl text-nowrap'>I'm <span className='text-purple-600 dm-sans'>Yash Jangir</span></h1>
                <div className="home-btns flex flex-row gap-3 mt-5 justify-center">
                  <button className='bg-purple-600 text-white hover:text-white border-2 border-transparent hover:border-2 hover:border-purple-600 px-3 py-2 text-sm md:text-md rounded-3xl duration-300 hover:bg-transparent hover:scale-105 inter cursor-pointer '>Download CV</button>
                  <button className='text-white border-2 border-white px-3 py-2 text-sm md:text-md rounded-3xl hover:bg-white hover:scale-105 hover:border-2 hover:border-white hover:text-black duration-300 transition inter cursor-pointer '>Connect</button>
                </div>
            </div>
            <div className="home-right border-0 border-zinc-700 flex justify-center">
                <img src={img2} alt="personal-img" className='fancy-border md:scale-100 w-[60%] md:w-[55vw]'/>
            </div>
        </div>
    </div>
  )
}

export default Home

