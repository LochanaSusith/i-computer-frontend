import { Link ,Routes, Route } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import AdminProduct from "../pages/admin/addminProduct";
import AdminAddProduct from "../pages/admin/addminAddProduct";

export default function AdminPage(){

    return(
        <div className="w-screen h-screen flex bg-accent" >

            <div className="w-[300px] h-full flex flex-col bg-accent" >
                <Link className=" m-2  flex items-center gap-2.5 p-3 text-white hover:bg-white hover:text-accent hover:opacity-80 rounded-md hover:ease-in transition-colors duration-100 " to="/admin"><FaRegListAlt />Order</Link>
                <Link className=" m-2  flex items-center gap-2.5 p-3 text-white hover:bg-white hover:text-accent hover:opacity-80 rounded-md hover:ease-in transition-colors duration-100 " to="/admin/products"><FaShoppingCart />Products</Link>
                <Link className=" m-2  flex items-center gap-2.5 p-3 text-white hover:bg-white hover:text-accent hover:opacity-80 rounded-md hover:ease-in transition-colors duration-100 " to="/admin/users"><FaUsers />Users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full border-8 border-accent rounded-[20px] bg-peimary p-4 rounded-[8px]">

                <Routes>
                    <Route
                        path="/"
                        element={<h1>Order Page</h1>}
                    />

                    <Route
                        path="/products"
                        element={<AdminProduct />}
                    />

                    <Route
                        path="/users"
                        element={<h1>Users Page</h1>}
                    />

                    <Route
                        path="/add-product"
                        element={<AdminAddProduct/>}
                    />
            </Routes>

            </div>
            
        </div>
    )
}