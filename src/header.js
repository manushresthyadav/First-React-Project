import React from 'react'
import './header.css'
import { Routes,Route,Link } from 'react-router-dom'
import Blog1 from "./blog"
import Ftrs from "./ftrs"
import Blog2 from "./blog2"
import Foot from "./footer"
import SignUp from "./signup"
import SignIn from "./Signin"
export default function header() {





  return (
    <div className='header'>
<div className='flex h-one'>
    <a  href="/" className='h-firsta'>GPT-3</a>
{/* <Link to="/">Home</Link> */}
        {/* <Link to="/gpt"> */}
        <a href="#myblog">What is GPT?</a>
        
        {/* </Link> */}
        {/* <Link to="/openAI"> */}
        <a href="/openAI">Open AI</a>
        
        {/* </Link> */}
        {/* <Link to="/c_study"> */}
        <a href="/c_study"> Case Studies</a>
       
        {/* </Link> */}
       {/* <Link to="/lib"> */}
       <a href="/lib"> Library</a>
      
       {/* </Link> */}
        
        </div>

<div className='inham flex flex-col'>
<section class="top-nav">
    
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
        <Link to="/"><li>Home</li>
        </Link>
        <Link to="/gpt"> <li>What is GPT?</li></Link>
        <Link to="/openAI"><li>OpenAI</li></Link>
        <Link to="/c_study"><li>Case Studies</li></Link>
        <Link to="/lib"> <li>Library</li></Link>
      
     
      
      
     
    </ul>
  </section>
</div>

{/* <div className='ham flex flex-col' onClick={handleClick}>
    <div className='xx'></div>
    <div className='xx'></div>
    <div className='xx'></div>
</div> */}



<div className='users'>
    <Link to="/signin">
    <i class="fa-solid fa-circle-user fa-2xl"></i>
    </Link>
<Link to="/signup">

<i class="fa-regular fa-circle-user fa-2xl"></i>
</Link>

</div>

<Link to="/signin">
<div  className='h-r1'>
             Sign in
        </div>
</Link>
        
        <div className='h-right rounded-xl cursor-pointer' >
            <Link to="/signup">
            Sign up
            </Link>
            
            </div>
            
        <Routes>
            {/* <Switch></Switch> */}
        <Route exact path="/" ></Route>
        <Route exact path="/gpt" element={<Blog1/>}></Route>
        <Route exact path="/openAI" element={<Ftrs/>}></Route>
        <Route exact path="/c_study" element={<Blog2/>}></Route>
        <Route exact path="/lib" element={<Foot/>}></Route>
        <Route exact path="/signup" element={<SignUp/>}></Route>
        <Route exact path="/signin" element={<SignIn/>}></Route>
      </Routes>
    </div>
    
  )
}
