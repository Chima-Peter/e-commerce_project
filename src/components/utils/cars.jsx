function generateRandomCar() {
   const carMakes = [
     "Toyota",
     "Honda",
     "Ford",
     "Nissan",
     "Hyundai",
     "Chevrolet",
     "Kia",
     "Mazda",
     "Subaru",
     "Volkswagen",
     "BMW",
     "Mercedes-Benz",
     "Audi",
     "Lexus",
     "Volvo",
   ];
   const carModels = [
     "Corolla",
     "Civic",
     "Focus",
     "Sentra",
     "Elantra",
     "Camry",
     "Accord",
     "Escape",
     "Altima",
     "Sonata",
     "Cruze",
     "Optima",
     "CX-5",
     "Impreza",
     "Jetta",
   ];
   const carMileage = [
      32541,
      68920,
      18734,
      52198,
      24972,
       12,
      37,
      5,
      18,
      29,
      27892, 
      43150,
      18476,
      39211,
      23, 
      57,
      0,
  89,
    ];
   const fuelTypes = ["petrol", "diesel"];
   const carCondition = ["new", "used"];
   const transmissions = ["automatic", "CTF"];
 
   const make = carMakes[Math.floor(Math.random() * carMakes.length)];
   const model = carModels[Math.floor(Math.random() * carModels.length)];
   const price = Math.floor(Math.random() * (80000 - 15000 + 1)) + 15000;
   const mileage = carMileage[Math.floor(Math.random() * carMileage.length)];
   const fuelType = fuelTypes[Math.floor(Math.random() * fuelTypes.length)];
   const condition = fuelTypes[Math.floor(Math.random() * carCondition.length)];
   const transmission = transmissions[Math.floor(Math.random() * transmissions.length)];
 
   const descriptions = [
     "A reliable and fuel-efficient car for everyday driving.",
     "A spacious and comfortable sedan with a smooth ride.",
     "A sporty and fun-to-drive car with a well-balanced handling.",
     "A luxurious and feature-packed car for those who appreciate comfort.",
     "A powerful and capable SUV for adventures on and off the road.",
     "A fuel-efficient and practical car for city commutes.",
   ];
 
   const descriptionIndex = Math.floor(Math.random() * descriptions.length);
 
   return {
     name: `${make} ${model}`,
     price,
     mileage,
     fuelType,
     condition,
     transmission,
     description: descriptions[descriptionIndex],
   };
 }
 
 export function Cars () {
   const additionalCars = [];
   for (let i = 0; i < 100; i++) {
   additionalCars.push(generateRandomCar());
   }
   return additionalCars
 }

 