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
   const carLists = [
  { make: "Toyota", model: "Corolla" },
  { make: "Honda", model: "Civic" },
  { make: "Ford", model: "F-Series" },
  { make: "Tesla", model: "Model 3" },
  { make: "Toyota", model: "Camry" },
  { make: "Honda", model: "CR-V" },
  { make: "Nissan", model: "Rogue" },
  { make: "Toyota", model: "RAV4" },
  { make: "Jeep", model: "Wrangler" },
  { make: "Ford", model: "Mustang" },
  { make: "Chevrolet", model: "Silverado" },
  { make: "Ram", model: "1500" },
  { make: "Hyundai", model: "Tucson" },
  { make: "Kia", model: "Telluride" },
  { make: "BMW", model: "X3" },
  { make: "Mercedes-Benz", model: "GLC-Class" },
  { make: "Audi", model: "Q5" },
  { make: "Subaru", model: "Outback" },
  { make: "Volkswagen", model: "Tiguan" },
  { make: "Mazda", model: "CX-5" }
];

const carImages = [
   "/components/utils/car-1.jpg",
   "/components/utils/car-2.jpg",
   "/components/utils/car-3.jpg",
   "/components/utils/car-4.jpg",
   "/components/utils/car-5.jpg",
   "/components/utils/car-6.jpg",
   "/components/utils/car-7.jpg",
   "/components/utils/car-8.jpg",
   "/components/utils/car-9.jpg",
   "/components/utils/car-10.jpg",
   "/components/utils/car-11.jpg",
   "/components/utils/car-12.jpg",
   "/components/utils/car-13.jpg",
   "/components/utils/car-14.jpg",
]

 
   const price = numberWithCommas((Math.floor(Math.random() * (500 - 15 + 1)) + 15) * 1000);
   const fuelType = fuelTypes[Math.floor(Math.random() * fuelTypes.length)];
   const carStock = carStocks[Math.floor(Math.random() * carStocks.length)];
   const condition = carCondition[Math.floor(Math.random() * carCondition.length)];
   const transmission = transmissions[Math.floor(Math.random() * transmissions.length)];
   const description = descriptions[Math.floor(Math.random() * descriptions.length)];
   const carImage = carImages[Math.floor(Math.random() * carImages.length)]
   const carList = carLists[Math.floor(Math.random() * carLists.length)]
 
   return {
      price,
      fuelType,
      condition,
      transmission,
      carImage,
      carStock,
      carList,
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

 