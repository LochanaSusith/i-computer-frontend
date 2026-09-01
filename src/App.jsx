import HomePage from "./assets/pages/home"
import LoginPage from "./assets/pages/login"
import RegisterPage from "./assets/pages/register"
import AdminPage from "./assets/pages/admin"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
    

export default function App() {

  return (
    <div className="w-full h-screen bg-primary text-secondary" >

      <Toaster position="top-center"/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/admin/*" element={<AdminPage/>}/>

      </Routes>
    </div>  
  )
}


