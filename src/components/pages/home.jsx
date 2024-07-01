import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
   const slides = [
      {image: "/components/pages/w14.jpg"},
      {image: "/components/pages/w15.jpg"},
      {image: "/components/pages/w16.jpg"},
      {image: "/components/pages/w17.jpg"},
   ]
  return (
   <main>
      <Carousel 
         infiniteLoop useKeyboardArrows autoPlay stopOnHover={false} transitionTime={'1000'} showThumbs={false} showStatus={false} interval={'6000'}>
         {
         slides.map((slide) => (
               <nav key={slide.image}>
                  <div 
                     className='absolute top-[50%] w-full flex justify-between box-border items-start'>
                     <div 
                        className='ml-10 text-white text-3xl'>
                        BOX
                     </div>
                     <p 
                        className='mr-10 text-white text-3xl'>
                     LOREM
                  </p>
                  </div>
                  <img src={slide.image} />                    
               </nav>
            ))
         }
      </Carousel>
   </main>
  )
}

export default Home
