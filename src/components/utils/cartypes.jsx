import { TbCarSuv } from "react-icons/tb";

function CarTypes({index}) {
   const carCategories = [
      "Sedan",
      "Coupe",
      "SUV",
      "Wagon",
      "Hatchback",
      "Convertible",
      "Truck",
      "Minivan",
      "Muscle Car",
      "Sports Car",
      "Luxury Car",
      "Electric Car",
      "Hybrid Car",
      "Off-road Vehicle",
    ];
    const slicedType = carCategories.slice(0, index)
  return (
    <div className=' customScroll flex w-[100%] overflow-x-auto gap-3'>
      {
         slicedType.map((car) => (
            <div 
               className='flex text-center flex-col cursor-pointer hover:bg-gray-200 hover:bg-clip-padding border rounded-md border-gray-400 items-center justify-center min-w-[80px] h-[60px]' 
               key={car}
               >
               <TbCarSuv />
               <h4 className='text-[10px] text-blue-950 font-bold'>{car}</h4>
            </div>
         ))
      }
    </div>
  )
}

export default CarTypes
