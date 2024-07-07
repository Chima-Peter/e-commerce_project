import { TbCarSuv } from "react-icons/tb";
import { Link } from "react-router-dom";

function CarBrands({index=20, overflow=false}) {
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
      "Stellantis",
      "Mitsubishi",
      "MG",
      "Volvo",
      "Audi",
      "BYD",
    ];

    const slicedBrands = carBrands.slice(0, index)
  return (
    <div className={`flex ${ overflow ? 'w-[98%]  overflow-x-auto customScroll' : 'overflow-hidden ml-4 md:ml-8 lg:ml-14 flex-wrap gap-5'} gap-3`}>
      {
         slicedBrands.map((car) => (
            <Link 
               className={`flex text-center flex-col cursor-pointer hover:bg-gray-200 hover:bg-clip-padding border rounded-md border-gray-400 items-center justify-center ${overflow ? 'min-w-[100px] h-[60px]' : 'min-w-[100px] h-[60px] md:min-w-[180px] md:h-[80px] lg:min-w-[250px] lg:h-[100px]'}`} 
               key={car}
               >
                  <TbCarSuv />
                  <h4 
                     className=' text-[10px] text-blue-950 font-bold'>{car}
               </h4>
            </Link>
         ))
      }
    </div>
  )
}

export default CarBrands
