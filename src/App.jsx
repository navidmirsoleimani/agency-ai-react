import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Teams from './Components/Teams';
import ContactUs from './Components/ContactUs';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';

// all components are animated by motion package (url : motion.dev) , see it's documentation

function App() {

  // we need it because for example sometimes we want to render different components/logos... considering the main theme , not just styling tags
  const [theme , setTheme] =useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : '')

  // why null ?
  const outlineRef = useRef(null)
  const dotRef = useRef(null)

  // Refs for custom cursor position tracking
  // useRef ??
  const mouse = useRef({x:0 , y:0})
  const position = useRef({x:0 , y:0})

  useEffect(()=>{
    const handleMouseMove = (event)=>{
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
    }

    document.addEventListener('mousemove' , (e)=>{
      handleMouseMove(e)
    })

    // animation
    const animate = ()=>{
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px , ${mouse.current.y - 6}px , 0 )`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px , ${position.current.y - 20}px , 0 )`
      }
      requestAnimationFrame(animate)
    }
    animate()

    return ()=>{
      document.removeEventListener('mousemove' , handleMouseMove)
    }
  },[])
  


  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} setTheme={setTheme} />

      {/* Custom cursor ring */}
      {/* style for moving smoother */}
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full
      border border-primary pointer-events-none z-[9999]'
      style={{transition: 'transform 0.1s ease-out'}}></div>

      {/* Custom cursor dot (we have disabled default cursor in index.css) */}
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full
      bg-primary pointer-events-none z-[9999]'></div>


    </div>
  )
}

export default App
