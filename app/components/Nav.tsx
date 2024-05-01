import React from 'react'
import Link from 'next/link'

const nav = () => {
  return (
    <div className="w-full h-[10vh]
    flex justify-center items-center">
     
        <Link href={'/'} className="font-body cursor-pointer text-[3vh]
       text-white font-bold"> Noor Farra </Link>
       
      </div>
  )
}

export default nav
