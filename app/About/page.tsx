import Image from "next/image";
import Nav from "../components/Nav";


export default function Home() {
  return (
    <>
    <div className="flex bg-HomeBG bg-cover bg-center h-[100vh]
     flex-col items-center  justify-start ">
        
         <Nav />
      <div className="w-full h-[90vh] flex justify-center items-center font-page text-white flex-col gap-[4vh] sm:text-[3.5vh] text-center">
        <h1 className="font-bold text-red-600">About Me</h1>
        <p className="mx-[1vh]">Motivated Junior FrontEnd Developer...<br/>
        I've Started directly learning web development in July 2023 after
         I have finished my high school and learned web development skills and improved my passion in 
         NextJS and creating web designs and functionality 
        </p>

        <h1 className="font-bold text-red-600">Education</h1>
        <p>
            <span className="font-bold text-red-600">UDEMY COURSES: &ensp;</span> I've got a Udemy courses in web development like angela's web bootcamp.
        </p>
        <p>
            <span className="font-bold text-red-600">ARAB AMERICAN UNIVERSITY: &ensp;</span> I'm in my first year as a computer science student.
        </p>
      </div>

    

    </div>
    </>  );
}
