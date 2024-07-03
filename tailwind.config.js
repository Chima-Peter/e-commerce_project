/** @type {import('tailwindcss').Config} */
export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {
      fontFamily:{
         'main': 'Raleway'
      },
      backgroundImage: {
         'img1': "url('/components/pages/w14.jpg')",
         'img3': "url('/components/pages/w15.jpg')",
         'img2': "url('/components/pages/w16.jpg')",
         'img4': "url('/components/pages/w17.jpg')"
      }
     },
   },
   plugins: [],
 }