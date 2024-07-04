import { TbCarSuv } from "react-icons/tb";

function CarBrands({index}) {
   const carBrands = [
      "Toyota",
      "Volkswagen",
      "Honda",
      "Hyundai",
      "Ford",
      "Nissan",
      "Chevrolet",
      "Mercedes-Benz",
      "BMW",
      "Kia",
      "Suzuki",
      "Renault",
      "Peugeot",
      "Tesla",
      "Stellantis (Fiat Chrysler Automobiles)",
      "Mitsubishi",
      "MG",
      "Volvo",
      "Audi",
      "BYD",
    ];

    const slicedBrands = carBrands.slice(0, index)
  return (
    <div className='flex flex-wrap w-full gap-3 overflow-hidden'>
      {
         slicedBrands.map((car) => (
            <div 
               className='flex flex-col border rounded-md border-gray-400 items-center justify-center hover:bg-gray-200 hover:bg-clip-padding cursor-pointer text-center  w-[80px] h-[60px]' 
               key={car}
               >
                  <TbCarSuv />
                  <h4 
                     className=' text-[10px] text-blue-950 font-bold'>{car}
               </h4>
            </div>
         ))
      }
    </div>
  )
}

export default CarBrands
