import React from 'react'
import Title from './Title';
import assets from '../assets/assets';
import toast from 'react-hot-toast';
import { motion } from "motion/react";


const ContactUs = () => {


   // from website documentation , we should link it to our form
   const onSubmit = async (event) => {
      // prevent from reloading
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0b388c7d-dc18-4054-aaa9-e2899a575131");
  

      // we have added try and catch
       try {
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
    
          const data = await response.json();
    
        if (data.success) {
          toast.success('Thanks for your submission')
          // reset the inputs values
          event.target.reset();
        } else {
          // we want to display errors and... by a package called react-hot-toast instead of console.log
          // we have imported it and mounted it in App.jsx
          toast.error(data.message)
        }
       } catch (error) {
         toast.error(error.message)
       }


      
  };





  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{staggerChildren: 0.2}}
      viewport={{once: true}}
    
    id='contact-us' className=' flex flex-col items-center
    gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700
    dark:text-white'>
      
      <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
      

      {/* using web3 forms site we send email directly in our website */}
      {/* in the documentation we will see that we should provide a name attribute for each input with specific value */}
      <motion.form 
      initial={{opacity: 0 , y: 30}}
      whileInView={{opacity: 1 , y: 0}}
      transition={{duration: 0.5 , delay: 0.4}}
      viewport={{once: true}}
      
      onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

         <div>
            <p className='mb-2 text-sm font-medium'>Your name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300
            dark:border-gray-600'>
                <img className='w-5' src={assets.person_icon} alt="" />
                <input name="name" type="text" placeholder='Enter your name'
                className='w-full p-3 text-sm outline-none' required />
            </div>
         </div>

         <div>
            <p className='mb-2 text-sm font-medium'>Email id</p>
            <div className='flex pl-3 rounded-lg border border-gray-300
            dark:border-gray-600'>
                <img className='w-5' src={assets.email_icon} alt="" />
                <input name="email" type="email" placeholder='Enter your email'
                className='w-full p-3 text-sm outline-none' required />
            </div>
         </div>

         
         {/* when grid cols sets to 2 , it will occupy 2 cols */}
         <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Message</p>
            <textarea name="message" rows={8} placeholder='Enter your message'
            className='w-full p-3 text-sm outline-none rounded-lg
            border border-gray-300 dark:border-gray-600 resize-none' />
         </div>

         <button type='submit' className='w-max flex gap-2
         bg-primary text-white text-sm px-10 py-4 rounded-full
         cursor-pointer hover:scale-103 transition-all'>
            Submit <img src={assets.arrow_icon} className='w-4' alt="" />
         </button>

      </motion.form>

    </motion.div>
  )
}

export default ContactUs
