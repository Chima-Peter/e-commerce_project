import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function DesktopBar() {
   const [isScrolled, setIsScrolled] = useState(false)
   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if scrolled past top
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
   <nav className={`flex justify-between text-white items-center w-full fixed py-5 z-10 border-b border-b-white px-20 ${isScrolled ? 'bg-white text-blue-950 shadow-2xl shadow-gray-400' : ''}`}>
      <h1 className={`font-semibold text-xl ${isScrolled ? 'text-blue-950' : ''}`}>MACELO AUTO<small className='text-xs'>s</small></h1>
      <ul className='text-md font-medium flex gap-5'>
         <li className={`hover:text-blue-500 text-sm font-semibold  ${isScrolled ? 'hover:text-white text-blue-950' : ''}`}>
            <Link>Inventory</Link>
         </li>
         <li className={`hover:text-blue-500 text-sm font-semibold  ${isScrolled ? 'hover:text-white text-blue-950' : ''}`}>
            <Link>About Us</Link>
         </li>
         <li className={`hover:text-blue-500  text-sm font-semibold  ${isScrolled ? 'hover:text-white text-blue-950' : ''}`}>
            <Link>Contact Us</Link>
         </li>
         <li className={`hover:text-blue-500 text-sm font-semibold  ${isScrolled ? 'hover:text-white text-blue-950' : ''}`}>
            <Link>Search</Link>
         </li>
      </ul>
   </nav>
  )
}

export default DesktopBar
