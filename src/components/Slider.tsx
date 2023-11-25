"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "heritage hoddies",
    image: "/image1.png",
  },
  {
    id: 2,
    title: "heritage hoddies",
    image: "/image2.png",
  },
  {
    id: 3,
    title: "heritage hoddies",
    image: "/image3.png",
  },
  {
    id: 3,
    title: "heritage hoddies",
    image: "/image4.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {

    const interval = setInterval(() => {
      // Change slide
      setCurrentSlide((prev:number) => ((prev + 1) % data.length));
      // Immediately scale up the new image
      setScale(1.4);

      // After a short delay, scale down
      setTimeout(() => {
        setScale(1);
      }, 1500); // Delay before scaling down
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
    {/* IMAGE CONTAINER */}
    <div className="w-full flex-1 relative overflow-hidden">
      <div
        style={{ transform: `scale(${scale})` }}
        className="w-full h-full absolute transition-transform duration-1000 ease-in-out"
      >
        <Image
          src={data[currentSlide].image}
          alt=""
          layout="fill"
          className="object-cover"
        />
      </div>
      {/* TEXT OVER IMAGE */}
      <div className="absolute bottom-[40%] left-[2%] flex items-center justify-center flex-col gap-8 w-auto h-auto text-gray-200 font-bold">

        <h1 className="text-[40px] font-[NovaSquare] font-bold text-center p-4 md:p-10 md:text-6xl xl:text-10xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-white text-black py-2 px-4 mt-[-2%] rounded-full">shop now</button>
      </div>
    </div>
  </div>

  );
};

export default Slider;