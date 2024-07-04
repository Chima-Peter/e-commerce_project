import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import DesktopBar from '../utils/desktopBar'
import Search from '../utils/search'
import MediaQuery from 'react-responsive'
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom"
import CarBrands from "../utils/carbrands"
import CarTypes from "../utils/cartypes"
import { useRef, useEffect, useState } from "react"
import Listin from "../utils/listings"

function Home() {
   const slides = [
      {image: "/components/pages/w14.jpg"},
      {image: "/components/pages/w15.jpg"},
      {image: "/components/pages/w16.jpg"},
      {image: "/components/pages/w17.jpg"},
   ]
   const imageRef = useRef(null);
   const containerRef = useRef(null);
   const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.clientWidth;
        setContainerWidth(newWidth);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
      if (containerRef.current) {
        const newWidth = containerRef.current.clientWidth;
        setContainerWidth(newWidth);
      }
  }, [])

  useEffect(() => {
    if (imageRef.current && containerWidth > 0) {
      const image = imageRef.current;
      const newHeight = containerWidth / (image.naturalWidth / image.naturalHeight);
      containerRef.current.style.height = `${newHeight}px`;
    }
  }, [containerWidth]); 
  const addBorder = () => {
   const nav = navRef.current
}
  return (
   <main className='flex flex-col font-main gap-14' onScroll={addBorder}>
      <DesktopBar />
      <Carousel 
         infiniteLoop useKeyboardArrows autoPlay stopOnHover={true} transitionTime={'1000'} showThumbs={false} showStatus={false} interval={'6000'}>
         {
            slides.map((slide) => (
               <div 
                  className='relative ' key={slide.image}>
                  <img ref={imageRef} src={slide.image} />                    
               </div>               
            ))
         }
      </Carousel>
      <div ref={containerRef} className="w-[100%] bg-[rgba(0,0,0,0.5)] absolute top-0">

      </div>
      <div 
         className='absolute top-[20%] lg:top-[15%] flex-col w-full flex box-border px-20 gap-4 items-start'>
         <h1  
            className='text-white text-5xl font-bold'>
            Let&rsquo;s Find Your Perfect Car<small className='text-[14px]'>...</small>
         </h1>
         <MediaQuery minWidth={'1200px'}>
            <Search />
         </MediaQuery>
      </div>
      <div className="flex flex-col gap-5 ml-20">
         <div className="w-full flex items-center justify-between">
            <h3 className="text-blue-950 font-bold text-xl">
               Browse by Category
            </h3>
            <Link className="text-xs mr-10 text-blue-950 font-bold flex items-center">
               <span className="pr-1">
                  View all
               </span>
               <MdArrowOutward />
            </Link>
         </div>
         <CarTypes index={'10'} />
      </div>
      <div className="flex flex-col gap-5 ml-20">
         <div className="w-full flex items-center justify-between">
            <h3 className="text-blue-950 font-bold text-xl">
               Explore Our Premium Brands
            </h3>
            <Link className="text-xs mr-10 text-blue-950 font-bold flex items-center">
               <span className="pr-1">
                  View all
               </span>
               <MdArrowOutward />
            </Link>
         </div>
         <CarBrands index={'10'} />
      </div>
      <div 
         className="flex flex-col gap-3 py-10 pl-20 bg-gray-200">
         <div className="w-full flex items-center justify-between">
            <h3 className="text-blue-950 font-bold text-xl">
               Featured Listings
            </h3>
            <Link className="text-xs mr-10 text-blue-950 font-bold flex items-center">
               <span className="pr-1">
                  View all
               </span>
               <MdArrowOutward />
            </Link>
         </div>
         <CarBrands />  
         <Listin /> 
      </div>
   </main>
  )
}

export default Home
