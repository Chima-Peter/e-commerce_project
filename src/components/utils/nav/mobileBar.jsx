import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { FaSearch } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";

function MobileBar() {
   const [icon, setIcon] = useState(true)

   const handleIcon = () => {
      setIcon(!icon)
   }
   const [isScrolled, setIsScrolled] = useState(false)
   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 0)
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   const slideVariants = {
      initial: {
         y: '-10%'
      },
      animate: {
         y: 0
      },
      exit: {
         x: '10%'
      }
   }
   return (
      <nav className={`flex flex-col text-white w-full gap-4 fixed z-10 border-b border-b-white  ${isScrolled ? 'bg-black shadow-xl' : ''} ${!icon ? 'bg-black h-[100%]' : ''}`}>
         <div className="flex w-full justify-between items-center py-2 md:py-5 px-4 md:px-8 lg:px-12">
            <h1 className={`font-semibold text-xl`}>
               MACELO AUTO<small className='text-xs'>s</small>
            </h1>
               {
                  icon && <GiHamburgerMenu className="w-5 h-5" onClick={handleIcon} />
               }
               {
                  !icon && <MdCancelPresentation className="w-5 h-5" onClick={handleIcon} />
               }
         </div>
         {   
            !icon &&                
               <motion.ul 
                  className='text-xs font-medium flex box-border flex-col gap-4 px-4 pb-4'
                  variants={slideVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  transition= {{
                        ease: 'linear',
                        duration: 0.2
                  }}>
                  <li className={`hover:text-blue-500 text-xs font-semibold  ${isScrolled ? 'hover:text-white text-white' : ''}`}>
                     <Link>Inventory</Link>
                  </li>
                  <li className={`hover:text-blue-500 text-xs font-semibold  ${isScrolled ? 'hover:text-white text-white' : ''}`}>
                     <Link>About Us</Link>
                  </li>
                  <li className={`hover:text-blue-500  text-xs font-semibold  ${isScrolled ? 'hover:text-white text-white' : ''}`}>
                     <Link>Contact Us</Link>
                  </li>
                  <li className={`hover:text-blue-500 text-xs font-semibold  ${isScrolled ? 'hover:text-white text-white' : ''}`}>
                     <Link >
                        Find a Car
                     </Link>
                  </li>
               </motion.ul>
         }
      </nav>
   )
}

export default MobileBar