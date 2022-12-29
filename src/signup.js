import './su.css'
import Gmail from "./assets/gmail.jpeg"
import Fb from "./assets/fb.png"
import {Link} from "react-router-dom"  

export default function signup(){


   

    return (
<div className="su ">
    <div className='blck flex flex-col text-black relative'>
        <Link to="/">
        <div className='one-right text-black'>
        <i class="fa-sharp fa-solid fa-xmark fa-xl"></i>
        </div>
        </Link>
       
        <div className='two mt-16'>
            {/* <div className='circle'></div> */}
            <div className='cd  w-64 m-auto font-bold ' >
                Unlimited free access to our resources
            </div>
            <p className='text-sm'>Sign Up to See more</p>
        </div>
        <div className='third'>
<button className='text-white bg-black subtn'>Continue with Email</button>
<button className='text-black subtn tb'><span className='msuh'><img alt="not found" src={Fb} className="w-8 inline-block mr-3"></img>Continue with Facebook</span>
<div className='msu'>Continue with <img src={Fb} alt="not found" className="w-8 inline-block mr-3"></img></div>
</button>
<button className='text-black subtn tb'><span className='msuh'><img alt="not found" src={Gmail} className="w-8 inline-block mr-6"></img>Continue with Google</span>
<div className='msu'>Continue with <img src={Gmail} alt="not found" className="w-8 inline-block mr-6"></img></div>
</button>
        </div>
        <div className='fourth text-sm mt-4 flex flex-col'>
            <div>
            <p className='text-center font-thin'>By continuing, you agree to the <p className='underline inline-block cursor-pointer'>Terms of Service</p><p className='inline-block'>and acknowledge you have read our</p> <p className='underline font-bold inline-block cursor-pointer'>Privacy Policy</p></p>
            </div>
            <Link to="/signin">
            <div className='gmt font-bold cursor-pointer'>Already a member? <p className='inline-block underline cursor-pointer'> Log In</p></div>
            </Link>
            
        </div>
        {/* <Routes>
            <Route path='/signin' element={<SignIn/>}></Route>
        </Routes> */}
    </div>
</div>
    );
}

