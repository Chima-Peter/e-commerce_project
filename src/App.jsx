import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./components/pages/errorpage"
function App() {
   return (
      <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/repo_name/'}
      >
         <Routes>
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
