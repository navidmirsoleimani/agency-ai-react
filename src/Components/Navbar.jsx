import React, { useState , useRef , useEffect } from 'react'
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from "motion/react"

// we get the theme state to display different logos
// we get the setTheme to change it using dark button
const Navbar = ({theme , setTheme}) => {



    // side menu state
    const [sidebarOpen , setSidebarOpen] = useState(false)



  return (
    // backdrop blur for when scroling down
    // animation
    <motion.div 
    initial={{opacity: 0 , y:-50}}
    animate={{opacity: 1 , y: 0}}
    transition={{duration: 0.6 , ease: 'easeOut'}}
    
    className='flex justify-between items-center px-4
    sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
    font-medium bg-white/95 dark:bg-gray-900/95'>

      {/* we have imported and exported all images and datas in assets.js */}
      <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" className='w-32 sm:w-40' />
          
       {/* ***how we display it if close icon is clicked*** */}
      <div className={`text-gray-700 dark:text-white sm:text-sm
      ${!sidebarOpen ?'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0
      max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-cyan-600
      max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        {/* close menu icon for mobile */}
        <img onClick={()=>{setSidebarOpen(false)}} src={assets.close_icon} alt="" className='w-5 absolute
        right-4 top-6 sm:hidden'/>

        {/* we will assign this hashtag adresses to the elements we want to scroll to (by id) */}
        {/* we gave a scroll-smooth className to the html element */}
        <a onClick={()=>{setSidebarOpen(false)}} href="#" className=' sm:hover:border-b'>Home</a>
        <a onClick={()=>{setSidebarOpen(false)}} href="#services" className='sm:hover:border-b'>Services</a>
        <a onClick={()=>{setSidebarOpen(false)}} href="#our-work" className='sm:hover:border-b'>Our Work</a>
        <a onClick={()=>{setSidebarOpen(false)}} href="#contact-us" className='sm:hover:border-b'>Contact Us</a>
      </div>


      <div className='flex items-center gap-2 sm:gap-4'>

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* open menu icon */}
        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
        alt="" onClick={()=>{setSidebarOpen(true)}}
        className='w-8 sm:hidden' />

        <a href="#contact-us" className='text-sm max-sm:hidden
        flex items-center gap-2 bg-primary text-white px-6 py-2 
        rounded-full cursor-pointer hover:scale-103 transition-all'>
            Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>


    </motion.div>
  )
}

export default Navbar
