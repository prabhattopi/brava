"use client";
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
interface Items{
    id:number;
    title: string;
    image: string;

}
const SemicircleDiv= ({id,title,image}:Items) => {
  return (
    <div style={{width:"300px"}} className='flex rounded-md rounded-l-[30%] bg-black shadow-slate-600 shadow-2xl justify-between px-2 py-2'>
        <div>
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className='object-cover rounded-full'
  
        />
        </div>
        <div className='flex flex-col justify-between px-2 py-2'>
            <h1 className='font-bold text-white text-[14px]'>{title}</h1>
            <Link href="/"><u className='text-white'>shop now</u></Link>

        </div>
   

    </div>
  )
}

export default SemicircleDiv