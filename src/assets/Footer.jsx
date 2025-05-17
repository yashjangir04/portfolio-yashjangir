import React from 'react'
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='bg-[#000000] w-full h-[10vh] border-t-2 border-zinc-800'>
      <div className="socials w-full h-full flex flex-row gap-12 justify-center items-center">
        <a href='' className='text-[#D8B08C] text-4xl hover:scale-110 duration-300'><SiCodechef /></a>
        <a href='' className='text-[#1E7D22] text-4xl hover:scale-110 duration-300'><SiCodeforces /></a>
        <a href='' className='text-[#FFA116] hover:text-[#e1910f] hover:scale-110 duration-300 transition-colors text-4xl'>
          <TbBrandLeetcode />
        </a>
        <a href='https://www.instagram.com/theyashjangir_04/' className="text-[#E1306C] hover:scale-110 duration-300 text-4xl"><FaInstagram /></a>
        <a href='https://www.linkedin.com/in/yash-jangir-748214313/' className='text-[#0077B5] hover:scale-110 duration-300 text-4xl'><FaLinkedin /></a>
        <a href='connect.to.yj@gmail.com' className='text-[#D14836] hover:scale-110 duration-300 text-4xl'><BiLogoGmail /></a>
      </div>
    </div>
  )
}

export default Footer   