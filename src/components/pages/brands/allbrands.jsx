import React from 'react'
import {DesktopBar} from '../../utils/nav/desktopBar'
import CarBrands from '../../utils/display/carbrands'
import DesktopFooter from '../../utils/nav/desktopFooter'

function AllBrands() {
  return (
    <main className='flex flex-col gap-6 min-h-[100vh] justify-between font-main'>
      <DesktopBar />
      <div>
         <h3 className="text-blue-950 font-bold mb-4 ml-4 md:ml-8 lg:ml-14 text-2xl mt-24 lg:mt-28">
            Explore Our Premium Brands
         </h3>
         <CarBrands />
      </div>
      <DesktopFooter />
    </main>
  )
}

export default AllBrands
