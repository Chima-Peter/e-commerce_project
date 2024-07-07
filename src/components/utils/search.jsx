import { useEffect, useState } from 'react'
import { EncodeCars, DecodeCars } from './carData/cars'

function Search() {
   const [toggle, settoggle] = useState(true)

   const [searchData, setSearchData] = useState({
      make: '',
      model: '',
      minPrice: '0',
      maxPrice: '250000',
      condition: toggle
   })
   const [carModel, setCarModel] = useState()
   const [carList, setCarList] = useState()
   const [show, setShow] = useState(false)
   const [searchModel, setSearchModel] = useState()

   const changeToggle = () => {
      settoggle(!toggle)
   }
   const handleMake = (event) => {
      setSearchData({ ...searchData, [event.target.name]: event.target.value})
      setCarModel(searchModel.carModels[event.target.value])
   }
   const handleSearchData = (event) => {
      setSearchData({ ...searchData, [event.target.name]: event.target.value})
   }
   const handleSubmit = () => {
      console.log('');
   }

   useEffect(() => {
      const fetchData = async () => {
         EncodeCars()
         let response = DecodeCars()
         if (response) {
               setCarList(response[0].carLists)
               setSearchModel(response[0])
               setCarModel(response[0].carModels[response[0].carLists[0]])
               setShow(true)
            }
      }
      fetchData()
   }, [])

  return (
   <form 
      onSubmit={handleSubmit} 
      className='flex w-[280px] flex-col gap-3  py-3 font-main px-5 border border-white rounded-lg bg-white shadow-lg shadow-blue-950'>
      <div 
         className='flex gap-0 border rounded-lg border-blue-600'>
         <button  
            className={`rounded-l-lg ${toggle ? 'text-white bg-blue-600' : 'bg-white text-blue-600'} border-0 py-1.5 focus:border-0 font-medium text-xs w-[150px]`} type="button" onClick={changeToggle}>
            New   
         </button>
         <button 
            className={` font-medium  rounded-r-lg border-0 py-1.5 focus:border-0 w-[150px] text-xs ${!toggle ? 'text-white bg-blue-600' : 'bg-white text-blue-600'}`} type="button" onClick={changeToggle}>
            Used
         </button>
      </div>
      <div 
         className='flex flex-col py-1 items-start  rounded-md border border-gray-300 gap-1'>
         <label 
            htmlFor='make' className=' px-2 text-[10px] font-semibold  text-blue-950'>
            Select Make
         </label>
         <select 
            className='text-blue-950 block w-full focus:ring-blue-600 rounded-md focus:outline-none text-xs px-1 font-semibold' 
            name="make" 
            id="make" 
            onChange={handleMake}>
            {
               show && carList.map((car, index) => (
                  <option value={car} key={`${car}-${index}`}>
                     {car}
                  </option>
               ))
            }
         </select>
      </div>
      <div
          className='flex flex-col py-1 items-start  rounded-md border border-gray-300 gap-1'>
         <label 
            htmlFor='model' className='px-2 text-[10px] font-semibold  text-blue-950'>
            Select Model
         </label>
         <select 
            className='px-1 block w-full focus:ring-blue-600 rounded-md  focus:outline-none text-blue-950 text-xs font-semibold' 
            name="model" 
            id="model"
            onChange={handleSearchData}>
            {
               show && carModel.map((car, index) => (
                  <option value={car} key={`${car}-${index}}`}>
                     {car}
                  </option>
               ))
            }
         </select>
      </div>
      <div 
         className='flex flex-col gap-1'>
         <p 
             className='px-2 text-[12px] font-semibold  text-blue-950'>
            Set Price($)
         </p>
         <div className='px-3 flex py-2 items-start  rounded-md border border-gray-300 gap-1 justify-evenly'>
            <label
               className='text-[10px] font-semibold'
               htmlFor="minPrice">Minimum
               <input 
                  type="number" 
                  name="minPrice" 
                  id="minPrice" 
                  autoFocus
                  min={'0'}
                  value={searchData.minPrice}
                  placeholder='0'
                  onChange={handleSearchData}
                  className='font-price text-xs border border-gray-400 focus:border-blue-600 px-1 py-1 font-medium placeholder:text-gray-400 
                  placeholder:text-xs placeholder:font-normal focus:border-2 focus:outline-none w-[100px] rounded-md' />
            </label>
            <label
               className='text-[10px] font-semibold'
               htmlFor="maxPrice"> Maximum
               <input 
                  type="number" 
                  name="maxPrice" 
                  min={'0'}
                  max={'1000000'}
                  id="maxPrice" 
                  value={searchData.maxPrice} 
                  onChange={handleSearchData}
                  placeholder='250000'
                  className='font-price text-xs appearance-none border border-gray-400 focus:border-blue-600 px-1 py-1 font-medium placeholder:text-gray-400 placeholder:text-xs placeholder:font-normal focus:border-2 focus:outline-none w-[100px] rounded-md' />
            </label>
         </div>
      </div>
      <button 
         className='bg-blue-600 text-white border border-blue-600 rounded-lg text-sm font-semibold py-1'
         type="submit">
         Search
      </button>
   </form>
  )
}

export default Search
