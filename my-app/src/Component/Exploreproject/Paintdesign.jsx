import React from 'react'
import { useState } from 'react';
import{CaretRightOutlined} from '@ant-design/icons';

import imgcard1 from "/public/Explorepaint/iimgno1.png"
import imgcard2 from "/public/Explorepaint/imgno2.png"
import imgcard3 from "/public/Explorepaint/imgno3.png"
import imgcard4 from "/public/Explorepaint/imgno4.png"
import smallcard1 from  "/public/Explorepaint/smallcards.png"
import calcutr1 from "/public/Explorepaint/calculator.png"
import sofapic from  "/public/Explorepaint/sofa.png"
import wallpic from  "/public/Explorepaint/wall.png"
import mis from  "/public/Explorepaint/miscalaneous.png"

const Paintdesign = () => {
  
  const [toggle, setToggle] = useState(1);
    function updateToggle(id) {
      setToggle(id);
    }

    const cardsData = [
    
  {
    id: 1,
    image: imgcard1,
    tag: '# Modern Living Room Makeover',
    title: 'Modern Living Room Makeover',
  },
  {
    id: 2,
    image: imgcard2,
    tag: '# Modern Living Room Makeover',
    title: 'Modern Living Room Makeover', 
  },
  {
    id: 3,
    image: imgcard3,
    tag: '# Modern Living Room Makeover',
    title: 'Modern Living Room Makeover',
  },
  {
    id: 4,
    image: imgcard4,
    tag: '# Modern Living Room Makeover',
    title: 'Modern Living Room Makeover',
  },
];
  return (
    <div className=" flex  sm:justify-between justify-center   ">
    <div className="explorpaint container px-[20px]  sm:mx-auto flex flex-col gap-36.5">
   <div className=" grid grid-cols-1 justify-center  gap-20 md:block  w-full  items-end sm:justify-between  ">
    <div className="left-side flex  items-end gap-3 ">
        <p className='B7 montserrat '>Explore Our <br /> Paint Projects</p>
        <div className="paragraph">
        <p className='T1  '>From Interiors to Exteriors, See <br /> How we Bring Space to life</p>
        </div>
    </div>
    <div className="right-side flex justify-center  md:justify-end gap-10">
        <ul>
            <li
              className={`B8 cursor-pointer pb-1 ${
                toggle === 1 ? "text-primary " : ""
              }`}
              onClick={() => updateToggle(1)}
            >
              Interior Projects
            </li>
            {toggle === 1 && (
              <div className="h-[4px] w-full bg-primary mt-1 rounded-full transition-all duration-300"></div>
            )}
          </ul>

          <ul>
            <li
              className={`B8 cursor-pointer pb-1 md:pb-0 ${
                toggle === 2 ? "text-primary " : ""
              }`}
              onClick={() => updateToggle(2)}
            >
              Exterior Projects
            </li>
            {toggle === 2 && (
              <div className="h-[4px] w-full bg-primary mt-1 rounded-full transition-all duration-300"></div>
            )}
          </ul>
    </div>
   </div>
   <div className="main flex justify-center">
   <div className="grid grid-cols-1 justify-center sm:grid-cols-2  lg:grid-cols-4 gap-3  sm:justify-center md:justify-between md:pt-21 " >
      {cardsData.map((card, index) => (
        <div key={card.id || index} className="cards relative  w-[300px]">
          <img src={card.image} alt={card.title} className='max-w-[300px] w-full '/>

          <div className="text absolute bottom-8 left-4">
            <p className="B9 whitespace-pre-line">{card.tag}</p>
            <p className="T1">{card.title}</p>
          </div>

          <div className="icon h-14 cursor-pointer w-[70px] bg-primary flex items-center justify-center text-white rounded-[20px] absolute top-0 right-0 sm:right-2 md:right-0 lg:right-0 xl:right-3 2xl:right-0  ">
            <CaretRightOutlined />
          </div>
        </div>
      ))}
    </div>
    </div>
    {/* <div className="outermain">

    <div className="mainn">
    <div className="left-side cards flex gap-12.5">
        <div className="img relative ">
            <img src={smallcard1} alt={smallcard1} className='relative ' />
            <div className="text absolute top-8 left-31">
                <div className="inner flex flex-col gap-4">
                <h4 className=''>Custom Paint <br /> Estimates</h4>
                <p className='T1'>Receive precise, <br /> tailored estimates</p>
                </div>
            </div>
        
        <div className="image absolute top-12">
        <img src={calcutr1} alt={calcutr1} className='px-[23px] py-[17px] bg-white rounded-[21px]' />
        </div>
        </div>
            
         <div className="handlecards pt-15">
        <div className="img relative ">
            <img src={smallcard1} alt={smallcard1} className='relative ' />
            <div className="text absolute top-8 left-31">
                <div className="inner flex flex-col gap-4">
                <h4 className=''>Furniture <br /> Estimates</h4>
                <p className='T1'>We protect and move  <br />your furniture</p>
                </div>
            </div>
        
        <div className="image absolute top-12">
        <img src={sofapic} alt={sofapic} className='px-[23px] py-[17px] bg-white rounded-[21px]' />
        </div>
        </div>
        </div>

    </div>



    <div className="left-side cards flex gap-12.5 pl-18 pt-8.5">
        <div className="img relative ">
            <img src={smallcard1} alt={smallcard1} className='relative ' />
            <div className="text absolute top-8 left-31">
                <div className="inner flex flex-col gap-4">
                <h4 className=''>Wall Crack  <br /> Fixation</h4>
                <p className='T1'>We fix cracks for a <br />smooth finish</p>
                </div>
            </div>
        
        <div className="image absolute top-12">
        <img src={wallpic} alt={wallpic} className='px-[23px] py-[17px] bg-white rounded-[21px]' />
        </div>
        </div>
            
         <div className="handlecards pt-15">
        <div className="img relative ">
            <img src={smallcard1} alt={smallcard1} className='relative ' />
            <div className="text absolute top-8 left-31">
                <div className="inner flex flex-col gap-4">
                <h4 className=''>Post-Pain <br /> Cleaning</h4>
                <p className='T1'>We clean up after the  <br /> job is done</p>
                </div>
            </div>
        
        <div className="image absolute top-12">
        <img src={mis} alt={mis} className='px-[23px] py-[17px] bg-white rounded-[21px]' />
        </div>
        </div>
        </div>

    </div>



    

    
    </div>





<div className="right-side">
    <p className='B7'>What <br /> we offer</p>
</div>
    
</div> */}
   </div>
   </div>
  )
}

export default Paintdesign
