import './index.css'
import './f-section.css'
import ilus from "./ilus.png"
import people from './assets/people.png'
import React from "react"
export default function useFirst(){

const [IniHp,change]=React.useState();

React.useEffect(()=>{
   
    let fleft=document.getElementById('old');
    let x=`${fleft.offsetHeight}px`;
    change(x);
},[])

function doit(){
   
    let fleft=document.getElementById('old');
    let x=`${fleft.offsetHeight}px`;
    change(x);
}
window.addEventListener('resize',doit);
   
    return(
<div className='f-section flex nxx' id="new" style={{height:`${IniHp}`}} >
<div className='f-left absolute reduce' id='old'>
<div className='attract'>
    Let's Build Something amazing with GPT-3 OpenAI
</div>
<div className='para'><p>
Yet bed any for travelling assistance indulgence unpleasing.Not thoughts all exercise blessing. Indulgence way
everything joy alteration boisterous the attachment. Party
we years to order allow asked of.
    </p>
    <div className='ips mt-5 flex'>
    <input type="text" placeholder='Enter Your Email Here' className='p-3 rounded-md'></input>
    <button className='p-3 bg-orange-600 text-white rounded-md' >Get Started</button>
    
</div>
<div className='flex ppl'><img src={people} alt="not found"></img><p className='mt-5 ml-2 text-white'>1600 people visited in the past 24 hours</p></div>

    </div>


</div>
<div className='f-right'>
    <img src={ilus} alt="not found"></img>
</div>
</div>

    );
}

