import Image from "next/image";
import Nav from "../components/Nav";
import Link from "next/link";
import bmw from "../PDF/bmw.png"
import alfa from "../PDF/alfa.png"
import carbung from "../PDF/carbung.png"
import zecks from "../PDF/zecks.png"


export default function Home() {
  return (
    <>
   
    <div className="flex bg-black  sm:bg-HomeBG
     bg-cover bg-center 
     flex-col items-center  justify-start ">
        
         <Nav />
         <div className="w-full h-[90%]  sm:h-[90vh]  flex justify-center items-center  p-[3vh]  text-white  flex-wrap gap-[4vh]  text-center">

         {Projects.map((item) => (
            <Link href={item.url} target="_blank">
 <div className="sm:h-[25vh] sm:w-[45vh] h-[20vh] w-[35vh] bg-black flex shadow-blue-800 shadow-md
 justify-center items-center rounded-[1vh] cursor-pointer hover:scale-105 flex-col transition-all ease-in-out ">
 <div className="w-full h-full rounded-t-[1vh]  bg-slate-400">
     <Image className="w-full h-full rounded-t-[1vh]" src={item.img} alt={""}></Image>
         </div>

         <div className="w-full h-[6vh] rounded-lg    
          flex justify-center items-center text-white font-body sm:text-[2vh]  ">
            <h1>{item.name}</h1>
     
         </div>
            </div>
            </Link>
         ))}
               
  
    </div>
    </div>
   
      </> 
      );
}



const Projects = [
    {
        "num": 1,
        "img": carbung,
        "name": "CarBung",
        "url": "https://carbung.vercel.app/"



    },
    {
        "num": 2,
        "img": bmw,
        "name": "BMW Clone",
        "url": "https://bmwsite.vercel.app/"


    },
    {
        "num": 3,
        "img": alfa,
        "name": "Alfa Romeo Clone",
        "url": "https://alfaromeo-five.vercel.app/"


    },
    {
        "num": 4,
        "img": zecks,
        "name": "Zecks Rental",
        "url": "https://noorfarra.github.io/CarRent/"


    },
    
    

]
