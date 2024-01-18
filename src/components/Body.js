import React, { useState } from 'react';
import img4 from './img4.png'
import img1 from './img0.jpg'
import img2 from './img1.jpeg'
import Btn from './Btn';
import "./Btn.css";
const Body = () => {
    return (
        <>
            <div className="flex-wrap flex box ">
                <div id='left' className='items-center'>
                    <div className='text-[#00df9a] text-5xl fonts-bold whitespace-pre w-full titletext' >Here's where the world of <br />gaming begins<br /> 
                           

                   </div>
                   <div  className='text-[rgb(116,232,130)] text-3xl fonts-semibold whitespace-pre w-full titletext'>17-19 Jan ,2024  <br/>Pragati Maidan</div>  
                   <br />
                   <div className='flex w-2/5 btnbox'>
                   <Btn className=" relative " text="Register"/>
                   <Btn className=" relative " idName="Sec" text="Stand"/>
                   </div>
                 
                    
                </div>

                {/* <div id='right'className='flex flex-wrap items-center ' >
                    <img src={img4} alt="" srcset="" className=' h-2/6 w-3/5  hide' />
                    <img src={img1} alt="" srcset="" className=' h-4/6 w-4/12  '/>
                    <img src={img2} alt="" srcset="" className=' h-2/6 w-3/5 hide' />
                </div> */}
            </div>
        </>
    )
}
export default Body;