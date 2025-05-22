import React, { useEffect, useState } from "react";
import pic from "/public/Navbarimage/Logo1.png";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
import person from "/public/Navbarimage/person.png";

function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const toggleMenu = () => {
    setIsopen(!isopen);
  };
  useEffect(() => {
  if (isopen) {
    document.body.style.overflow = "hidden"; // Prevent scroll
  } else {
    document.body.style.overflow = "auto"; // Restore scroll
  }
}, [isopen]);
  
  return (
    <div className="    ">
      <div className="md:container pt-[34px] md:mx-auto  px-[20px]  flex   justify-between items-center  w-full ">
        <div className="ing">
          <img src={pic} alt="" className="cursor-pointer" />
        </div>
        <ul className=" justify-center gap-5.5 items-center h-[91px] hidden  md:flex">
          <li className="text-gradient navtext  cursor-pointer  flex  flex-col justify-center items-center ">
            Home
            <div className="dot h-[5px] w-[5px] bg-primary rounded-full"></div>
          </li>

          <li className="navtext montserrat cursor-pointer">About</li>
          <li className="navtext montserrat  cursor-pointer">Product</li>
          <li className="montserra navtext cursor-pointer">Faq</li>
          <li className="navtext montserra cursor-pointer ">Contact</li>
        </ul>
       <div className="flex items-center gap-8 overflow-hidden">
  {/* Desktop Buttons */}
  <button className="button px-[26px] py-[13px]  bg-[#006254] rounded-[10px] cursor-pointer hidden md:flex">
    Get Estimate
  </button>
  <div className="hidden md:flex">
    <img src={person} alt="Person Icon" className="cursor-pointer "  />
  </div>

  {/* Mobile Toggle Icon */}
  <button onClick={toggleMenu} className="cursor-pointer md:hidden z-50 !overflow-hidden">
    {isopen ? (
      <RiCloseLargeFill size={30} className="text-white absolute top-4 right-4" />
    ) : (
      <HiMenu size={30} className="text-black" />
    )}
  </button>

  {/* Mobile Menu */}
 {isopen && (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-800 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
    <button onClick={toggleMenu} className="absolute top-4 right-4 z-50">
      <RiCloseLargeFill size={30} className="text-white" />
    </button>

    <ul className="flex flex-col items-center gap-6 text-white text-xl">
      <li className="cursor-pointer">Home</li>
      <li className="cursor-pointer">About</li>
      <li className="cursor-pointer">Product</li>
      <li className="cursor-pointer">Faq</li>
      <li className="cursor-pointer">Contact</li>
    </ul>
    <button className="button text-Gray px-6 py-3 bg-[#006254] rounded-[10px]">
      Get Estimate
    </button>
    <img src={person} alt="Person Icon" className="cursor-pointer w-[40px]" />
  </div>
)}

</div>
      </div>
    </div>
  );
}

export default Navbar;
