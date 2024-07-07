import { Link } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md";

function ListinBox({car, index}) {
  return (
   <div key={`${car}-${index}`} className="cursor-pointer hover:bg-black hover:bg-clip-padding shadow-lg rounded-lg">
      <img src={car['carImage']} alt="" className="md:min-w-[300px] md:h-[150px] rounded-t-lg" />
      <div className="flex flex-col gap-2 bg-white p-4 rounded-b-lg">
         <h5 className="text-blue-950 text-xs font-bold font-price">
            {car.condition} {car.carList.make}-{car.carList.model}
         </h5>
         <ul className="flex list-disc p-0 m-0">
            <li className="text-[9px] text-blue-950 font-extrabold mx-2">
               {car.fuelType}
            </li>
            <li className="text-[9px] text-blue-950 font-extrabold mx-2">
               {car.transmission}
            </li>
         </ul>
         <h5 className="font-extrabold text-md font-price">
            ${car.price}
         </h5>
         <Link className="text-[10px] text-blue-600 font-bold flex items-center hover:text-blue-950">
            <span className="pr-1">
               View Details
            </span>
            <MdArrowOutward />
         </Link>
      </div>
   </div>
  )
}

export default ListinBox
