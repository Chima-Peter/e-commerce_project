import base64 from 'base-64'
function generateRandomCar() {
   const fuelTypes = ["Petrol", "Diesel"];
   const carCondition = ["New", "Used"];
   const carStocks = ['yes', 'no']
   const transmissions = ["Automatic", "CTF"];
   const descriptions = [
     "A reliable and fuel-efficient car for everyday driving.",
     "A spacious and comfortable sedan with a smooth ride.",
     "A sporty and fun-to-drive car with a well-balanced handling.",
     "A luxurious and feature-packed car for those who appreciate comfort.",
     "A powerful and capable SUV for adventures on and off the road.",
     "A fuel-efficient and practical car for city commutes.",
   ];
   let carLists = [
      "Tesla", "Toyota", "Jeep", "Ford", "Chevrolet", "Ram", "Hyundai", "Kia", "BMW", "Mercedes-Benz", "Audi", "Subaru" , "Volkswagen", "Mazda"
   ];
   const carModels = {}
   const sortedCarModels = {}
   const modelList = [
      ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"],
      ["Camry", "Corolla", "RAV4", "Tacoma", "Highlander"], 
      ["Wrangler", "Grand Cherokee", "Cherokee", "Gladiator", "Compass"],
      ["F-150", "Mustang", "Explorer", "Escape", "Bronco"],
      ["Silverado", "Camaro", "Tahoe", "Malibu", "Spark"],
      ["1500", "2500", "3500", "Rebel", "Dakota"],
      ["Sonata", "Elantra", "Tucson", "Palisade", "Santa Fe"],
      ["Telluride", "Sorento", "Sportage", "K5", "Soul"],
      ["3 Series", "5 Series", "X3", "X5", "M3"],
      ["C-Class", "E-Class", "S-Class", "GLC", "GLE"],
      ["A4", "Q5", "A3", "Q3", "TT"],
      ["Forester", "Outback", "Legacy", "Impreza", "Crosstrek"],
      ["Jetta", "Golf", "Tiguan", "Atlas", "Taos"],
      ["CX-5", "Mazda3", "CX-9", "MX-5", "Mazda6"],
   ];  

const carImages = [
   "/e-commerce_project/components/utils/car-1.jpg",
   "/e-commerce_project/components/utils/car-2.jpg",
   "/e-commerce_project/components/utils/car-3.jpg",
   "/e-commerce_project/components/utils/car-4.jpg",
   "/e-commerce_project/components/utils/car-5.jpg",
   "/e-commerce_project/components/utils/car-6.jpg",
   "/e-commerce_project/components/utils/car-7.jpg",
   "/e-commerce_project/components/utils/car-8.jpg",
   "/e-commerce_project/components/utils/car-9.jpg",
   "/e-commerce_project/components/utils/car-10.jpg",
   "/e-commerce_project/components/utils/car-11.jpg",
   "/e-commerce_project/components/utils/car-12.jpg",
   "/e-commerce_project/components/utils/car-13.jpg",
   "/e-commerce_project/components/utils/car-14.jpg",
]

   modelList.map((model, index) => {
   carModels[carLists[index]] = model
   })

   modelList.map((model, index) => {
   sortedCarModels[carLists[index]] = model[Math.floor(Math.random() * model.length)]
   })

   const price = numberWithCommas((Math.floor(Math.random() * (500 - 15 + 1)) + 15) * 1000);
   const fuelType = fuelTypes[Math.floor(Math.random() * fuelTypes.length)];
   const carStock = carStocks[Math.floor(Math.random() * carStocks.length)];
   const condition = carCondition[Math.floor(Math.random() * carCondition.length)];
   const transmission = transmissions[Math.floor(Math.random() * transmissions.length)];
   const description = descriptions[Math.floor(Math.random() * descriptions.length)];
   const carImage = carImages[Math.floor(Math.random() * carImages.length)]
   const carData = carLists[Math.floor(Math.random() * carLists.length)]
 
   return {
      price,
      fuelType,
      carModels,
      sortedCarModels,
      carLists,
      condition,
      transmission,
      carImage,
      carStock,
      carData,
      description
   };
 }

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

 
 function EncodeCars () {
   const additionalCars = [];
   for (let i = 0; i < 100; i++) {
   additionalCars.push(generateRandomCar());
   }
   const response = JSON.stringify(additionalCars)
   localStorage.setItem('cars', base64.encode(response))

 }

 function DecodeCars () {
   let response = localStorage.getItem('cars')
   if (response) {
      response = base64.decode(response)
      response = JSON.parse(response)
      return response
   }
 }
 export { EncodeCars, DecodeCars }

 