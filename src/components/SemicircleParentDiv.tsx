import React from 'react'
import SemicircleDiv from './SemicircleDiv'
const data = [
    {
      id: 1,
      title: "future fest",
      image: "/semi1.svg",
    },
    {
      id: 2,
      title: "future fest",
      image: "/semi2.svg",
    },
    {
      id: 3,
      title: "future fest",
      image: "/semi1.svg",
    },
    {
      id: 4,
      title: "future fest",
      image: "/semi2.svg",
    },
    {
      id: 4,
      title: "future fest",
      image: "/semi2.svg",
    },
    {
      id: 4,
      title: "future fest",
      image: "/semi2.svg",
    },
    {
      id: 4,
      title: "future fest",
      image: "/semi2.svg",
    },
    {
      id: 4,
      title: "future fest",
      image: "/semi2.svg",
    },
    {
      id: 4,
      title: "future fest",
      image: "/semi2.svg",
    },
    {
      id: 4,
      title: "future fest",
      image: "/semi2.svg",
    },
  ];
  
const SemicircleParentDiv = () => {
  return (
    <div className='mt-[5%] px-4 py-4 flex w-[100%] overflow-hidden items-center justify-between flex-nowrap gap-6'>
        {
            data.map(e=>(
             <div key={e.title} className='w-1/2 lg:w-1/4 scrolling-container'>
               <SemicircleDiv  title={e.title} image={e.image} id={e.id}/>
              </div>
              
            ))
        }

    </div>
  )
}

export default SemicircleParentDiv