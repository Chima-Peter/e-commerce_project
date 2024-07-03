import { Link } from 'react-router-dom'

function DesktopBar() {
  return (
   <nav className='flex justify-between text-white items-center w-full fixed top-2 z-10 px-20'>
      <h1 className='font-semibold text-xl'>MACELO AUTO<small className='text-xs'>s</small></h1>
      <ul className='text-md font-medium flex gap-5'>
         <li className='hover:text-blue-500 text-sm font-semibold'>
            <Link>Inventory</Link>
         </li>
         <li className='hover:text-blue-500 text-sm font-semibold'>
            <Link>About Us</Link>
         </li>
         <li className='hover:text-blue-500  text-sm font-semibold'>
            <Link>Contact Us</Link>
         </li>
         <li className='hover:text-blue-500 text-sm font-semibold'>
            <Link>Search</Link>
         </li>
      </ul>
   </nav>
  )
}

export default DesktopBar
