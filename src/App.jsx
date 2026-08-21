import HomePage from "./assets/pages/home"
import LoginPage from "./assets/pages/login"
import RegisterPage from "./assets/pages/register"
import AdminPage from "./assets/pages/admin"
import { Routes, Route } from "react-router-dom"
    

export default function App() {

  return (
    <div className="w-full h-screen bg-primary text-secondary" >
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/admin/*" element={<AdminPage/>}></Route>

      </Routes>
    </div>  
  )
}


