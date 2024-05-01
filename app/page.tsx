import Image from "next/image";
import Nav from "./components/Nav";
import Homepage from "./components/Home";

export default function Home() {
  return (
    <>
    <div className="flex bg-HomeBG bg-cover bg-center min-h-screen
     flex-col items-center  justify-start ">
        
         <Nav />
         <Homepage/>

    

    </div>
    </>  );
}
