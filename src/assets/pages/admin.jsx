import { Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminPage(){

    return(
        <div className="w-screen h-screen  flex" >

            <div className="w-[300px] h-full bg-amber-700 flex flex-col" >
                <Link to="/admin">Order</Link>
                <Link to="/admin/products" >Products</Link>
                <Link to="/admin/users" >Users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-amber-300">

                <Routes>
                    <Route path="/" element={<h1>Order Page</h1>}></Route>  
                    <Route path="/products" element={<h1>product Page</h1>}></Route> 
                    <Route path="/users" element={<h1>Users Page</h1>}></Route> 
                </Routes>
            </div>
            
        </div>
    )
}