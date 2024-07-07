import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/pages/errorpage"
import Home from "./components/pages/home"
import AllTypes from "./components/pages/view/alltypes"
import AllBrands from "./components/pages/view/allbrands"

function App() {
   return (
      <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/e-commerce_project/'}
      >
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Home />} />
            <Route path="cartypes" element={<AllTypes />} />
            <Route path="carbrands" element={<AllBrands />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
