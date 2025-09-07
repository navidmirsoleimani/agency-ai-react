// why creating a separate component?
import React, { useEffect } from 'react'
import assets from '../assets/assets';

const ThemeToggleBtn = ({theme , setTheme}) => {

    // instead of setting it in onclick property of images
    // (theme changes there) , we say whenever theme changes
    useEffect(()=>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme' , theme)
    },[theme])

    // setting theme by browser default mode
    useEffect(()=>{
        // if the default is dark we will get true and vice versa
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        // if theme is not defined (by local storage or this button)
        setTheme(theme  || (prefersDarkMode ? 'dark' : 'light') )
    },[])

  return (
    <>
      <button>
        {theme === 'dark' ? (
            <img onClick={()=>setTheme('light')} src={assets.sun_icon}
            className='size-8 p-1.5 border border-gray-500
            rounded-full' alt="" />
        ) :
        (
            <img onClick={()=>setTheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5
            border border-gray-500 rounded-full' alt='' />
        ) }
      </button>
    </>
  )
}

export default ThemeToggleBtn
