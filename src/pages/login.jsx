export default function LoginPage(){

    return(
        <div className="w-full h-full bg-[url('/i-computer-bg.jpg')] bg-cover bg-no-repeat flex items-center justify-center">
            
                <div className="w-[50%] h-full flex items-center justify-center flex-col">
                    <img src="/i-computer-logo.png" alt="i-computer logo" className="w-[300px]  "/>
                    <h1 className="text-4xl font-blod mt-5">ISURU COMPUTERS</h1>
                </div>

                <div className="w-[50%] h-full flex items-center justify-center">

                    <div className="backdrop-blur-md w-[450px] h-[650px] shadow-2xl rounded-lg flex flex-col justify-center">

                <input type="Email" placeholder="Email" className="w-[90%] h-[50px] rounded-lg border-2 border-secondary outline-none m-5 p-3" />
                <input type="password" placeholder="Password" className="w-[90%] h-[50px] rounded-lg border-2 border-secondary outline-none m-5 p-3" />
                <p className="w-full text-right p-5 ">
                    Foeget Password?
                    <a href="/forgot-password" className="text-accent">Forgot Password</a>
                </p>
                <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg bg-accent text-white font-bold">Login</button>
                <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg border-2 border-accent text-white font-bold">Login with google</button>
                <p className="w-full text-right p-5 ">
                    Don't have an account?
                    <a href="/register" className="text-accent">signup</a>
                </p>
                
                </div>

                </div>
            
            
                
           
        </div>
    );
}