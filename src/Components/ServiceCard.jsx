import React, { useRef, useState } from 'react';
import { motion } from "motion/react";


const ServiceCard = ({service , index}) => {

    // position of the hover border (relating to position of the cursor and the card size)
    const [position , setPostiton] = useState({
        x:0,
        y:0,
    })

    // visiblity of hover border
    const [visible , setVisible] = useState(false)
 
    const divRef = useRef()

    const handleMouseMove = (event)=>{
        // The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. Properties other than width and height are relative to the top-left of the viewport. 
        const boundaries = divRef.current.getBoundingClientRect()
        setPostiton({x: event.clientX - boundaries.left , y: event.clientY - boundaries.top})
    }


  return (
    <motion.div
    initial={{opacity: 0 , y: 30}}
    whileInView={{opacity: 1 , y: 0}}
    // index for increasing delay value (comes from props)
    transition={{duration: 0.5 , delay: index * 0.2}}
    viewport={{once: true}}
    
    className='relative overflow-hidden max-w-lg m-2
    sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700
    shadow-2xl shadow-gray-100 dark:shadow-white/10'
    onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>setVisible(false)}
    ref={divRef} onMouseMove={handleMouseMove}>
      
      {/* pointer events => hover , click... */}
      {/* we want to change the position when cursor moves */}
      {/* hover border super important */}
      <div className={`pointer-events-none blur-2xl rounded-full
      bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
      w-[300px] h-[300px] absolute z-0 transition-opacity
      duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`}
      style={{top:position.y - 150 , left:position.x - 150}} />

        
        {/* display service cards in two right and left sections */}
        {/* *** hover margin is for hover border width and hover padding is for neutralizing margin effect on the content *** */}
        {/* why it has to have relative position ? */}
        <div className='flex items-center gap-10 p-8 hover:p-7.5
        hover:m-0.5 transition-all rounded-[10px] bg-white
        dark:bg-gray-900 z-10 relative '>

            {/* outline of the icon */}
            <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                <img src={service.icon} alt="" className='max-w-24
                bg-white dark:bg-gray-900 rounded-full m-2' />
            </div>

            {/* entire space */}
            <div className='flex-1'>
                <h3 className='font-bold'>{service.title}</h3>
                <p className='text-sm mt-2'>{service.description}</p>
            </div>


        </div>



    </motion.div>
  )
}

export default ServiceCard
