import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import Icon from '@mdi/react'
import { mdiShopping } from '@mdi/js';
import { MdCancelPresentation } from "react-icons/md";

function MobileBar({home=false}) {
   const [isScrolled, setIsScrolled] = useState(false)
   const [icon, setIcon] = useState(true)

   const handleIcon = () => {
      setIcon(!icon)
   }

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 0)
      }
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   const slideVariants = {
      initial: {
         y: '-10%',
         opacity: 0
      },
      animate: {
         y: 0,
         opacity: 1
      }
   }
   return (
      <nav className={`flex flex-col text-white  w-full gap-4 fixed z-10 border-b border-b-white  ${isScrolled ? 'bg-blue-950 shadow-xl' : ''} ${!icon ? 'bg-blue-950 h-[100%] border-b-0' : ''} ${home ? '' : 'bg-blue-950'}`}>
         <div className="flex w-full justify-between items-center py-2 md:py-5 px-4 md:px-8 lg:px-12">
            <h1 className={`font-semibold text-xl`}>
               MACELO AUTO<small className='text-xs'>s</small>
            </h1>
               {
                  icon && <GiHamburgerMenu className="w-7 h-7" onClick={handleIcon} />
               }
               {
                  !icon && <MdCancelPresentation className="w-7 h-7" onClick={handleIcon} />
               }
         </div>
         {   
            !icon &&                
               <motion.ul 
                  className='text-xs font-medium flex box-border flex-col gap-4 px-4 pb-4'
                  variants={slideVariants}
                  initial='initial'
                  animate='animate'
                  transition= {{
                        ease: 'linear',
                        duration: 0.3
                  }}>
                  <li className={`hover:text-blue-500 text-xs font-semibold`}>
                     <Link  to={'/featured'}>Inventory</Link>
                  </li>
                  <li className={`hover:text-blue-500 text-xs font-semibold`}>
                     <Link to={'/find'}>
                        Find a Car
                     </Link>
                  </li>
                  <li className={`hover:text-blue-500 text-xs font-semibold`}>
                     <Link className="flex gap-2">
                        <span>
                           Shopping Cart
                        </span>
                     </Link>
                  </li>
                  <li className={`hover:text-blue-500  text-xs font-semibol}`}>
                     <Link onClick={() => {
                        window.scrollTo({
                           top: document.documentElement.scrollHeight,
                           behavior: "smooth"
                        });
                     }}>Contact Us</Link>
                  </li>
               </motion.ul>
         }
      </nav>
   )
}

export default MobileBar
