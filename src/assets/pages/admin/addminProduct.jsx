import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function AdminProduct(){
    return(
        <div className=" w-full h-full   overflow-y-scroll">
            <Link to="/admin/add-product" className="fixed w-[50px] h-[50px] bg-accent flex items-center justify-center rounded-full text-white hover:bg-white hover:text-accent hover:opacity-60 right-[50px] bottom-[50px] hover:ease-in transition-colors duration-100">
                <FaPlus />
            </Link>
        </div>
    )
}