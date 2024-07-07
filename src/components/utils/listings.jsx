import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import base64 from 'base-64'
import {Cars} from './cars'
import { LazyLoadImage } from 'react-lazyload'
import { MdArrowOutward } from "react-icons/md";

function Listin({index}) {
   const [show, setShow] = useState(false)
   const [activeBtn, setActiveBtn] = useState(
      {
         val1: true,
         val2: false,
         val3: false
      }
   )
   const [inStockCars, setInStockCars] = useState([])
   const [usedCars, setUsedCars] = useState([])
   const [newCars, setNewCars] = useState([])

   const handleBtns = (val) => {
      const newData = {}
      newData[val] = true
      setActiveBtn(newData)
   }

   useEffect(() => {
      const fetchData = async () => {
         let response = localStorage.getItem('cars')
         if (response)
            {
               response = base64.decode(response)
               response = JSON.parse(response)
               const tempStock = []
               const tempUsed = []
               const tempNew = []
               response.forEach((car) => {
                  if (car.carStock == 'yes')
                     tempStock.push(car)
                  if (car.condition == 'New')
                     tempNew.push(car)
                  if (car.condition == 'Used')
                     tempUsed.push(car)
               })
               if (tempStock) {
                  setInStockCars(tempStock)
                  setShow(true)
               }
               if (tempNew) {
                  setNewCars(tempNew)
                  setShow(true)
               }
               if (tempUsed) {
                  setUsedCars(tempUsed)
                  setShow(true)
               }
            }
      }
      fetchData()
   }, [])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
         <button 
            className={`text-blue-950 pb-1 text-xs font-extrabold ${activeBtn.val1 ? 'border-b-2 border-b-blue-950 rounded-sm' : ''}`} 
            onClick={() => handleBtns('val1')}>
            In Stock
         </button>
         <button 
            className={`text-blue-950 pb-1 text-xs font-extrabold ${activeBtn.val2 ? 'border-b-2 border-b-blue-950 rounded-sm' : ''}`} 
            onClick={() => handleBtns('val2')}>
            New Cars
         </button>
         <button 
            className={`text-blue-950 pb-1 text-xs font-extrabold ${activeBtn.val3 ? 'border-b-2 border-b-blue-950 rounded-sm' : ''}`} 
            onClick={() => handleBtns('val3')}>
            Used Cars
         </button>
      </div>
      <div  className="flex gap-5 w-[98%] overflow-x-auto customScroll">
         {
            (show && activeBtn.val1) && inStockCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer hover:bg-black hover:bg-clip-padding">
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
            ))
         }
         {
            (show && activeBtn.val2) && newCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer hover:bg-black hover:bg-clip-padding">
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
            ))
         }
         {
            (show && activeBtn.val3) && usedCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer hover:bg-black hover:bg-clip-padding">
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
            ))
         }
      </div>
    </div>
  )
}

export default Listin
