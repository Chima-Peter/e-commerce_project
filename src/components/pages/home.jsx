import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import DesktopBar from '../utils/desktopBar'
import Search from '../utils/search'
import MediaQuery from 'react-responsive'

function Home() {
   const slides = [
      {image: "/components/pages/w14.jpg"},
      {image: "/components/pages/w15.jpg"},
      {image: "/components/pages/w16.jpg"},
      {image: "/components/pages/w17.jpg"},
   ]
  return (
   <main className='font-main'>
      <DesktopBar />
      <Carousel 
         infiniteLoop useKeyboardArrows autoPlay stopOnHover={true} transitionTime={'1000'} showThumbs={false} showStatus={false} interval={'6000'}>
         {
            slides.map((slide) => (
               <div 
                  className='relative' key={slide.image}>
                  <img src={slide.image} />                    
               </div>               
            ))
         }
      </Carousel>
      <div 
         className='absolute top-[15%] flex-col w-full flex box-border px-20 gap-4 items-start'>
         <h1  
            className='text-white text-2xl md:text-4xl lg:text-5xl font-bold'>
            Let&rsquo;s Find Your Perfect Car<small className='text-[14px]'>...</small>
         </h1>
         <MediaQuery minWidth={'1200px'}>
            <Search />
         </MediaQuery>
      </div>
   </main>
  )
}

export default Home
