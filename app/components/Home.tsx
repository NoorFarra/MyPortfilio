'use client'
import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import Link from 'next/link';
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import resumeCV from "../PDF/resumecv.jpeg"
import jsPDF from 'jspdf';
import { useState } from 'react';

const Home = () => {


  const [saving, setSaving] = useState(false);

  function saveResume() {
    setSaving(true);
    var doc = new jsPDF('portrait', 'px', 'a4', false);
    doc.addImage("https://i.ibb.co/yQDdywH/resume-CV-page-0001.jpg", 'JPG', 0, 0, 417, 653);
    doc.save('resume.pdf');
    
  }


  return (
    <div className="w-full h-[90vh]  flex sm:flex-row flex-col justify-center items-center">
    <div className="h-full w-[50%]  flex justify-center items-center">
      <div className="w-full h-[50vh] flex justify-center flex-col gap-[1vh] items-center text-white">
        <h1 className="text-[3vh] sm:text-[3.5vh] text-center font-page">
        <span > <h1 className="text-[7vh] sm:text-[8vh]"> FrontEnd Developer</h1></span>
        <div className='flex flex-row justify-center items-center gap-[3vh]'>
        <div className='cursor-pointer hover:scale-105 transition-all ease-in-out'><TbBrandNextjs /></div>
            <div className='cursor-pointer hover:scale-105 transition-all ease-in-out'><SiTailwindcss /></div>
            <div className='cursor-pointer hover:scale-105 transition-all ease-in-out'><FaReact /></div>
            </div>

        <br/> Use's New Methods Of Web Developing Skills 
        </h1>
        <div className='w-full h-[5vh] gap-[3vh]
        flex justify-center items-center text-[3vh]'>
            <div className='cursor-pointer hover:scale-105 transition-all ease-in-out'> <Link href={'https://github.com/NoorFarra'} target='_blank'> <FiGithub /></Link></div>
            <div className='cursor-pointer hover:scale-105 transition-all ease-in-out'><Link href={'https://www.linkedin.com/in/noorfarra/'} target='_blank'><FiLinkedin /></Link></div>
            <div className='cursor-pointer hover:scale-105 transition-all ease-in-out'> <Link href={'https://myaccount.google.com/u/1/?hl=en&utm_source=OGB&utm_medium=act'} target='_blank'><CgMail /></Link></div>



        </div>
      </div>
    </div>
    <div className="h-full w-[50%]  flex justify-center flex-col gap-[3vh] items-center text-white font-page font-semibold">
      <div className="w-[30vh] h-[7vh] hover:scale-105 transition-all ease-in-out flex justify-center items-center  border-[0.4vh]"><Link href={'/About'}><h1>About</h1></Link></div>
      <div onClick={saveResume} className="w-[30vh] h-[7vh] hover:scale-105 transition-all ease-in-out flex justify-center items-center  border-[0.4vh]"><Link href={''} ><h1 > My - CV</h1></Link></div>
      <div className="w-[30vh] h-[7vh] hover:scale-105 transition-all ease-in-out flex justify-center items-center  border-[0.4vh]"><Link href={'/Projects'}><h1>Projects</h1></Link></div>
      <div className="w-[30vh] h-[7vh] hover:scale-105 transition-all ease-in-out flex justify-center items-center  border-[0.4vh]"><Link href={'/Contact'}><h1>Contact</h1></Link></div>
      </div>
  </div>
  )
}

export default Home
function setSaving(arg0: boolean) {
  throw new Error('Function not implemented.');
}

