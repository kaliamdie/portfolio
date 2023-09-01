import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from "framer-motion";
import kali from "../images/kali.jpg"
import resume from "../images/resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
export default function Landing({setSelected}) {
 const isAbove=useMediaQuery("(min-width:1060px")
 
    return (
   <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>

{/*img section */}
<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
    {isAbove ? (
   <div
   className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
   before:w-full before:h-full before:border-2 before:border-black before:z-[-1]"
 >
      <img
        alt="profile"
        className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
        src={kali}
      />
    </div>
    ):(
    <div>
<img
  alt="profile"
  className="hover:filter hover:saturate-140 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[300px]"
  src={kali}
/>

    </div>)}
</div>
{/* <img src="/assets/profile-image.png" alt="" className="kal" /> */}
{/*main sectioncd
 */}
 <div className=' mb-30 z-30 basis-2/5 mt-12 md:mt-32'>
 <motion.div 
   initial="hidden"
   whileInView="visible"
   viewport={{once:true,amount:0.5}}
    transition={{duration:0.5}}
    variant={{
      hidden:{opacity :0,x:-50},
      visible:{opacity:1,x:0}
    }}

 >
   <p className="text-6xl font-playfair z-10 text-center md:text-start">
          Hi, I'm Kali {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Amdie
            </span>
          </p>
          <p className="mt-10 mb-7  text-lg text-center md:text-start">
           Software Engineer
          </p>

          <motion.div 
  className='flex mt-5 justify-center md:justify-start'
  initial="hidden"
  whileInView="visible"
  viewport={{once:true,amount:0.5}}
  transition={{delay:0.2,duration:0.5}}
>
  <a
    className="bg-black text-purple rounded-sm py-3 px-7 font-semibold
    hover:bg-black hover:text-white transition duration-500"
    onClick={() => setSelected("contact")}
    href={resume} download=""
  >
    Download Resume
  </a>
  <div className="flex items-center ml-3"> {/* Add this div for the icons */}
    <a href="https://github.com/kaliamdie" className="mr-3">
      <FontAwesomeIcon icon={faGithub} size="2x" /> {/* Use "2x" for larger icons */}
    </a>
    <a href="https://www.linkedin.com/in/kalkidan-amdie/">
      <FontAwesomeIcon icon={faLinkedin} size="2x" /> {/* Use "2x" for larger icons */}
    </a>
  </div>
</motion.div>
</motion.div>
 </div>
   </section>
  )
}
