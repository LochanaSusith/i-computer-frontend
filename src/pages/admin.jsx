import { Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminPage(){

    return(
        <div className="w-full h-screen border-4 border-blue-500 flex">
            <div className="w-[300px] h-full bg-amber-800 flex flex-col" > 
                
                <Link to="/admin/">Order</Link>
                <Link to="/admin/products/">Products</Link>
                <Link to="/admin/users/">Users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-amber-400">

                <Routes>
                    <Route path="/" element={<h1>OrderPage</h1>} />
                    <Route path="/products/" element={<h1>ProductsPage</h1>} />
                    <Route path="/users/" element={<h1>UsersPage</h1>} />
                </Routes> 
            </div>

        </div>
    );
}
// w-[calc(100%-300px)] equl to flex-1