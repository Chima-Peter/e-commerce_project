import {DesktopBar} from '../../utils/nav/desktopBar'
import CarTypes from '../../utils/display/cartypes'
import DesktopFooter from '../../utils/nav/desktopFooter'

function AllTypes() {
  return (
    <main className='flex flex-col  min-h-[100vh] justify-between gap-6 font-main'>
      <DesktopBar />
      <div>
         <h3 className="text-blue-950 font-bold mb-4 ml-4 md:ml-8 lg:ml-14 text-2xl mt-24 lg:mt-28">
            Browse by Category
         </h3>
         <CarTypes />
      </div>
      <DesktopFooter />
    </main>
  )
}

export default AllTypes
