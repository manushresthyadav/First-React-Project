import Ml from "./assets/aiml.jpeg"
import "./signin.css"
import gl from "./assets/ggl.jpeg"
import tw from "./assets/twitter.jpeg"
import {Link} from "react-router-dom"

export default function signin(){
    return (
      <div className="signin flex ">
<img alt="not found" src={Ml} className='hdsi'></img>
<div className="text-white text-left im">
    <div className="circle hdsi"></div>
<div className="text-4xl font-bold mt-12 hdsi">Work with Us</div>
<div className="mt-4 hdsi">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ratione esse fuga dicta! Non, suscipit dicta. Provident totam labore, minus neque iste voluptas.</div>
</div>
<div className="siblck text-black">
    <div className="first text-right text-sm cursor-pointer">
        <p>Don't have an account?<p className="underline inline-block font-bold">Sign up?</p></p>
        <Link to="/">
     
        <i class="fa-sharp fa-solid fa-xmark fa-xl"></i>
        
        </Link>
        
    </div>

    <div className="second flex flex-col">
        <div className="IN text-2xl text-left mt-20  font-bold">Sign In</div>
        <button className="sibtn font-bold mt-8"><span className="fpx"><img alt="not found" src={gl} className=" inline-block mr-3 "></img>Continue with Google</span> <div className="ifpx">Login with <img alt="not found" src={gl} className=" inline-block mr-3 "></img></div></button>
        <button className="sibtn font-bold mb-10"><span className="fpx"><img alt="not found" src={tw} className=" inline-block mr-3 "></img>Continue with Twitter</span> <div className="ifpx">Login with <img alt="not found" src={tw} className=" inline-block mr-3 "></img></div></button>
        <div className="line"><p className="merge">OR</p></div>
    </div>
    <div className="third flex flex-col mt-8">
    <p className="text-left ">User name or email address</p>
        {/* <div> */}
       
<input className="thirdip"></input>
        {/* </div> */}

<div className="flex hidediv"><p className="text-left">Your password</p> <p className="hide"><i class="fa-solid fa-eye-slash mr-4"></i>Hide</p></div>
<input className="thirdip"></input>
<div className="font-bold underline text-right">Forgot Your Password</div>
<button className="tbtn">Sign In</button>

<Link to="/signup">
<div className="mt-2 cursor-pointer text-black">

<p>Don't have an account?<p className="underline inline-block font-bold">Sign up?</p></p>
</div>
</Link>



    </div>
</div>
{/* <Routes>
    <Route path="/signup" element={<SignUp/>}></Route>
</Routes>  */}
      </div> 
        
    );
}