import { Link } from "react-router-dom";

export default function LoginPage() {

  return (
    <div className="w-full h-full bg-[url(/i-bg.png)] bg-cover bg-center bg-no-repeat flex ">

      <div className="w-[50%] h-full flex flex-col justify-center items-center">

        <img src="/i-logo.png" className="w-[500px] h-[500px] object-contain"></img>

      </div>


      <div className="w-[50%] h-full flex justify-center items-center">

          <div className="w-[400px] h-[500px] backdrop-blur-md shadow-2xl rounded-lg flex flex-col justify-center ">

           <input type="email" placeholder="Email" className="w-[90%] h-[50px] bg-transparent border border-primary rounded-sm placeholder:text-primary text-secondary focus:outline-none m-3 p-2"></input>
           <input type="password" placeholder="Password" className="w-[90%] h-[50px] bg-transparent border border-primary rounded-sm placeholder:text-primary text-secondary focus:outline-none m-3 p-2"></input>
           <p className="m-3 w-[90%] text-right text-secondary">Forget password? <Link to="/register" className="text-accent font-bold">Reset</Link></p>
           <button className="m-3 p-3 w-[90%] h-[50px] bg-accent rounded-lg text-secondary font-bold">Login</button>
           <button className="m-3 p-3 w-[90%] h-[50px] border border-accent rounded-lg text-secondary font-bold">Login with google</button>
           <p className="m-3 w-[90%] text-right text-secondary">Don't have an account? <Link to="/register" className="text-accent font-bold">Register</Link></p>
           


          </div>

      </div>

    </div>
  )
}