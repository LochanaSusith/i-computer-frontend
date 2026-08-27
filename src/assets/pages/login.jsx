import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";



export default function LoginPage() {

  const [email,setEmail] = useState(" ");
  const [password,setPassword] = useState(" ");

  // function login(){
  //   console.log(email,password);
  //   axios.post("http://localhost:3000/users/login",{
  //     email:email,
  //     password:password
  //   }).then(()=>{
  //     console.log("login successfull")
  //   }).catch(()=>{
  //     console.log("login failed")
  //   })
  // }

  async function login(){
    try{
      const res = await axios.post("http://localhost:3000/users/login",{
        email:email,
        password:password
      })
      console.log(res);
      toast.success("Login successful!");
    }catch(err){
      console.log(err);
      toast.error("Login failed!");
    }

  }

  return (
    <div className="w-full h-full bg-[url(/i-bg.png)] bg-cover bg-center bg-no-repeat flex ">

      <div className="w-[50%] h-full flex flex-col justify-center items-center">

        <img src="/i-logo.png" className="w-[500px] h-[500px] object-contain"></img>

      </div>


      <div className="w-[50%] h-full flex justify-center items-center">

          <div className="w-[400px] h-[500px] backdrop-blur-md shadow-2xl rounded-lg flex flex-col justify-center ">

           <input type="email" placeholder="Email" className="w-[90%] h-[50px] bg-transparent border border-primary rounded-sm placeholder:text-primary text-secondary focus:outline-none m-3 p-2" onChange={(e)=>{setEmail(e.target.value)}}/>

           <input type="password" placeholder="Password" className="w-[90%] h-[50px] bg-transparent border border-primary rounded-sm placeholder:text-primary text-secondary focus:outline-none m-3 p-2" onChange={(e)=>{setPassword(e.target.value)}}/>

           <p className="m-3 w-[90%] text-right text-secondary">Forget password? <Link to="/register" className="text-accent font-bold">Reset</Link></p>
           <button className="m-3 p-3 w-[90%] h-[50px] bg-accent rounded-lg text-secondary font-bold" onClick={login}>Login</button>
           <button className="m-3 p-3 w-[90%] h-[50px] border border-accent rounded-lg text-secondary font-bold">Login with google</button>
           <p className="m-3 w-[90%] text-right text-secondary">Don't have an account? <Link to="/register" className="text-accent font-bold">Register</Link></p>
           


          </div>

      </div>

    </div>
  )
}