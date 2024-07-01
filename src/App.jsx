import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/pages/errorpage"
import Home from "./components/pages/home"

function App() {
   return (
      <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/e-commerce_project/'}
      >
         <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
