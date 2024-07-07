import { useEffect, useState } from "react"
import {DecodeCars, EncodeCars} from './cars'
import ListinBox from "./listinBox"

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
         let response = DecodeCars()
         if (response) {
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
      <div  className="flex gap-5 w-[98%] pb-4 overflow-x-auto customScroll">
         {
            (show && activeBtn.val1) && inStockCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer hover:bg-black hover:bg-clip-padding shadow-lg rounded-lg">
                  <ListinBox car={car} index={index} />
               </div>
            ))
         }
         {
            (show && activeBtn.val2) && newCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer hover:bg-black hover:bg-clip-padding shadow-lg rounded-lg">
                  <ListinBox car={car} index={index} />
               </div>
            ))
         }
         {
            (show && activeBtn.val3) && usedCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer hover:bg-black hover:bg-clip-padding shadow-lg rounded-lg">
                  <ListinBox car={car} index={index} />
               </div>
            ))
         }
      </div>
    </div>
  )
}

export default Listin
