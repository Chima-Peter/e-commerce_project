import { EncodeCars, DecodeCars } from "../../utils/carData/cars"
import { useState, useEffect } from "react"
import ListinBox from "../../utils/display/listinBox"

function SortData({overflow=false}) {
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
         let searchData = JSON.parse(localStorage.getItem('searchData'))
         if (response && searchData) {
               const tempStock = []
               const tempUsed = []
               const tempNew = []
               response.forEach((car) => {
                  if ((searchData.model == car.sortedCarModels[car.carData]) && (searchData.make == car.carData) && (Number(car.price) > Number(searchData.minPrice)) && (Number(car.price) < Number(searchData.maxPrice)))
                     {
                        if (car.carStock == 'yes')
                           tempStock.push(car)
                        if (car.condition == 'New')
                           tempNew.push(car)
                        if (car.condition == 'Used')
                           tempUsed.push(car)
                     }
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
               console.log(tempNew, tempStock, tempUsed)
            }
      }
      fetchData()
   }, [])
  return (
    <div className={`flex flex-col gap-4 ${overflow ? '' : 'ml-4 md:ml-8 lg:ml-14'}`}>
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
      <div  className={`flex ${ overflow ? 'w-[98%] pb-4 overflow-x-auto customScroll gap-5' : 'overflow-hidden justify-evenly items-start flex-wrap gap-x-3 gap-y-5'}`}>
         {
            (show && activeBtn.val1 && (inStockCars.length > 0)) && inStockCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer w-fit shadow-lg rounded-lg">
                  <ListinBox show={overflow} car={car} index={index} />
               </div>
            ))
         }
         {
            (show && activeBtn.val1 && (inStockCars.length == 0)) && <h2 className="font-semibold text-gray-500 mt-10 text-2xl ">
               We apologise but we currently don't have your search car model in this category.
            </h2>
         }
         {
            (show && activeBtn.val2 && (newCars.length > 0)) && newCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer w-fit shadow-lg rounded-lg">
                  <ListinBox show={overflow} car={car} index={index} />
               </div>
            ))
         }
         {
            (show && activeBtn.val2 && (newCars.length == 0)) && <h2 className="font-semibold text-gray-500 mt-10 text-2xl ">
               We apologise but we currently don't have your search car model in this category.
            </h2>
         }
         {
            (show && activeBtn.val3 && (usedCars.length > 0)) && usedCars.map((car, index) => (
               <div key={`${car}-${index}`} className="cursor-pointer w-fit shadow-lg rounded-lg">
                  <ListinBox show={overflow} car={car} index={index} />
               </div>
            ))
         }
         {
            (show && activeBtn.val3 && (usedCars.length == 0)) && <h2 className="font-semibold text-gray-500 mt-10 text-2xl ">
               We apologise but we currently don't have your search car model in this category.
            </h2>
         }
      </div>
    </div>
  )
}

export default SortData
