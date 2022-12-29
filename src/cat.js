import React from 'react'
import './cat.css'
export default function cat ()  {
  return (
    <div className='cat mt-28 '>
        <div className='cat-one flex flex-col'>
            <div className='flex ml-4 mt-3'>
            <div className='text-black'>Request Early Access to Get Started</div>
            </div>
            
            
            <div className='flex mt-4 ml-4'>
                <div className='font-bold text-black text-xl hue'>Register today & start exploring the endless possibilities.</div>
                <button className='text-white  bg-black  btn'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
