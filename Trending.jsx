import React from 'react'
import bollywood from "./../assets/Images/bollywood.png"
import doctor from "./../assets/Images/doctor.png"
//import hockey from "./../assets/Images/hockey.png"
import mallu from "./../assets/Images/mallu.png"
import documentary from "./../assets/Images/documentary.png"


function Trending() {
    const productionHouseList=[
        {
            id:1,
            image:bollywood,
            
        },
        {
            id:2,
            image:doctor,
           
        },
        // {
        //     id:3,
        //     image:hockey,
       
        // },
        {
            id:4,
            image:mallu,
           
        },
        {
            id:5,
            image:documentary,
           
        },
 
    ]
  
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div>
  )
}

export default Trending
