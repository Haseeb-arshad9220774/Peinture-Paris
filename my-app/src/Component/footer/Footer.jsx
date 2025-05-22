import React from "react";
import logofooter from "/public/Footericon/logo.png"
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="content  container sm:mx-auto px-[20px] flex justify-center  ">
      <div className="main ">
        <div className="content-of-footer flex flex-col justify-center gap-6.5 ">
    <div className="main   grid grid-cols-1 justify-center lg:grid-cols-3 md:justify-between sm:min-h-[269px]  h-full w-full  ">
      <div className="main flex justify-center lg:block">
      <div className="left-side-content max-w-[439px] sm:pt-[45px] flex justify-center">
        <p className="T3 text-Gray">
          At Peinture paris, we offer premium paint estimation services tailored
          to your needs. Whether it’s an interior refresh or an exterior
          makeover, we ensure accurate estimates and high-quality paints from
          trusted brands.
        </p>
      </div>
      </div>
        <div className="main flex justify-center lg:block">
      <div className="middle flex  flex-col items-center  ">
        <div className="img ">
 
        <img src={logofooter} alt={logofooter} className="" />
        </div>
        <h4 className="">Peinture paris</h4>
        <p className="T1 text-Gray">Precision in Every Coat</p>
       
        
      </div>
      </div>
          <div className="main flex justify-center lg:block">
      <div className="rightsection pt-[45px] flex gap-[40px]">
        <ul className="about flex flex-col gap-[10px]">
            <li className="text-primary B4 montserrat">About</li>
            <li className="T3">About Us</li>
            <li className="T3">Faq</li>
        </ul>
         <ul className="about flex flex-col gap-[11px]">
            <li className="text-primary B4 montserrat">Support</li>
            <li className="T3">Contact Us</li>
         
        </ul>
         <ul className="about flex flex-col gap-[11px]">
            <li className="text-primary B4 montserrat">Services</li>
            < li className="T3">Our services</li>
            <li className="T3">Products</li>
        </ul>
        <div className="icons flex flex-col gap-3.5">
            <FaInstagram  className="text-primary cursor-pointer"/>
            <FiFacebook  className="text-primary cursor-pointer"/>
            <FaXTwitter  className="text-primary cursor-pointer"/>

        </div>
      </div>
      </div>

    </div>
    <div className="lastdata flex  justify-center items-center gap-1 pl-10">
            <p className="lasttext">©peintureparis</p>
            <p className=" text-[rgba(51,51,51,0.75)] font-montserrat text-[14px] not-italic font-normal leading-[24px]">2024. All rights reserve</p>

        </div>
        </div>
        </div>
    </div>
  );
};

export default Footer;
