
import { useState } from "react";

export default function AdminAddProduct(){
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productAlternative, setProductAlternative] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productLabelledPrice, setProductLabelledPrice] = useState("");
    const [productCategory, setProductCategory] = useState("Other");
    const [productBrand, setProductBrand] = useState("Generic");
    const [productModel, setProductModel] = useState("");
    const [productIsVisible, setProductIsVisible] = useState(false);
    return(
        <div className=" w-full max-h-full flex flex-wrap">
            <div className="w-[50%] h-[70px] flex flex-col  gap-2 mb-4  ">
                <label>Product ID : </label>
                <input className="outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" type="text" placeholder="Ex:ID001" value={productId} onChange={(e) => setProductId(e.target.value)} />
            </div>
            <div className="w-[50%] h-[70px] flex flex-col  gap-2 mb-4   ">
                <label>Product Name : </label>
                <input className=" outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" type="text" placeholder="Ex:lapto" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </div>
            <div className="w-full h-[150px] flex flex-col  gap-2 mb-4   ">
                <label>Product Description : </label>
                <textarea className=" outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent h-[100px]" placeholder="Ex:this is a sample product description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
            </div>
            <div className="w-full h-[70px] flex flex-col  gap-2 mb-4   ">
                <label>Alternative(Comma separated) : </label>
                <input className="outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" type="text" placeholder="Ex:Alternative1,Alternative2" value={productAlternative} onChange={(e) => setProductAlternative(e.target.value)} />
            </div>
            <div className="w-[50%] h-[70px] flex flex-col  gap-2 mb-4   ">
                <label>Price : </label>
                <input className="outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" type="text" placeholder="Ex:5000" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
            </div>
            <div className="w-[50%] h-[70px] flex flex-col  gap-2 mb-4   ">
                <label>Labelled Price : </label>
                <input className="outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" type="text" placeholder="Ex:6000" value={productLabelledPrice} onChange={(e) => setProductLabelledPrice(e.target.value)} />
            </div>
            <div className="w-[25%] h-[70px] flex flex-col  gap-2 mb-4  ">
                <label>Category : </label>
                <select className=" outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                </select>
            </div>
            <div className="w-[25%] h-[70px] flex flex-col  gap-2 mb-4   ">
                <label>Brand : </label>
                <select className=" outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" value={productBrand} onChange={(e) => setProductBrand(e.target.value)}>
                    <option value="Brand A">Brand A</option>
                    <option value="Brand B">Brand B</option>
                    <option value="Brand C">Brand C</option>
                </select>
            </div>
            <div className="w-[25%] h-[70px] flex flex-col  gap-2 mb-4   ">
                <label>Model : </label>
                <input className="outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" type="text" placeholder="Ex:Inspiron 15" value={productModel} onChange={(e) => setProductModel(e.target.value)} />
            </div>
            <div className="w-[25%] h-[70px] flex flex-col  gap-2 mb-4   ">
                <label>Is Visible : </label>
                <select className="outline-none w-[90%] border border-gray-300 rounded-md p-2 m-0.5 focus:border-accent w-[50%]" value={productIsVisible} onChange={(e) => setProductIsVisible(e.target.value)}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </div>
        </div>
    )
}