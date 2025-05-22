import React from "react";

import { useState, useEffect } from "react";

import { FaArrowLeftLong } from "react-icons/fa6";
import omaga from "/public/Feedbackimg/vector.png";
import svgr from "/public/Explorepaint/svgt.svg";
import ellspse1 from "/public/Feedbackimg/Ellpa1.png";
import ellspse2 from "/public/Feedbackimg/ellesp2.png";
import ellspse3 from "/public/Feedbackimg/ellespe3.png";
import ellspse4 from "/public/Feedbackimg/Ellipse 11.png";
import ellspse5 from "/public/Feedbackimg/Ellipse 12.png";
import ellspse6 from "/public/Feedbackimg/sarahcard.png";
import elpscard from "/public/Feedbackimg/Review.svg";

import start1 from "/public/Feedbackimg/star.png";
import { IoChevronDownCircleOutline } from "react-icons/io5";
const Customer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How accurate are your paint estimates?",
      answer:
        "Our paint estimates are 95% accurate based on room dimensions and materials. thanks to our advanced alogorithem that factor in wall dimension pain type and the number of coats by providing precise measurements and detail we ensure you get the exact amount of paint you need helping you save time and reduce waste",
    },
    {
      question:
        "Do you offer furniture moving and protection    process?",
      answer:
        "Our paint estimates are 95% accurate based on room dimensions and materials.",
    },
    {
      question: "Can you fix wall cracks before painting?",
      answer:
        "Our paint estimates are 95% accurate based on room dimensions and materials.",
    },
    {
      question: "What happens after the painting is complete?",
      answer:
        "Our paint estimates are 95% accurate based on room dimensions and materials.",
    },
  ];
  return (
    <div className="main-customer  flex justify-center">
    <div className=" pt-10 container sm:mx-auto px-[20px]   ">
      <div className="ist-content  gap-3 grid grid-cols-1 justify-items-center justify-center md:justify-items-center lg:justify-items-start ">
        <p className="B4 ">
          Our <br /> Reviewers
        </p>
        <div className="text flex  items-end gap-3">
          <p className="B7">
            Our Customers <br /> Feedback.
          </p>

          <p className=" T1">
            See what they said about <br /> our services
          </p>
        </div>
      </div>
      <div className="main grid grid-cols-1 sm:justify-center justify-self-center-safe   xl:grid-cols-2 md:justify-between  justify-items-center md:justify-items-center ">
        <div className="data ">
          <div className="omaga pt-15">
            <img src={omaga} alt={omaga} />
          </div>
          <div className="ouer-review shadow-[-20px_20px_40px_0px_rgba(0,0,0,0.17)] max-w-[349px] w-full h-[193px] relative">
            <div className="inner pl-[35px]">
              <p className="B4 text-black">Our Reviewers</p>

              <div className="img pt-[27px]  ">
                <img src={ellspse1} alt="" className="ease-in-out duration-700" />
                <div className="imgsecond absolute top-13 left-21">
                  <img src={ellspse2} alt="" />
                </div>
                <div className="imgthird absolute top-13 left-32">
                  <img src={ellspse3} alt="" />
                </div>
                <div className="imgthird absolute top-13 left-1/2">
                  <img src={ellspse4} alt={ellspse4} />
                </div>
                <div className="imgthird absolute top-13 left-2/3">
                  <img src={ellspse5} alt={ellspse5} />
                  <div className="text absolute top-7 left-1/4">
                    <p
                      className="poppins-regular text-white text-[18px] font-semibold leading-[26.88px] not-italic
"
                    >
                      12K+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side pt-15 relative  ">
          <div className="img  relative   ">
            <div className="img ">
              <img src={elpscard} alt="" className="     " />
            </div>
            <div className="sarah flex  gap-5 items-center absolute top-5 left-16 sm:top-20 sm:left-1/5  ">
              <img src={ellspse1} alt="" className="min-w-4  sm:h-full  " />

              <div
                className="text 
                "
              >
                <p className="montserrat lighttext ">Sarah</p>
                <p className="B4 text-[#828282]">Homeowner, Paris</p>
              </div>
              <div className="stars flex sm:justify-end sm:items-center pr-3 sm:pr-0 sm:gap-[7px] ">
                <img src={start1} alt={start1}   className="min-w-1 sm:w-full"/>
                <img src={start1} alt={start1} className="min-w-1 sm:w-full" />
                <img src={start1} alt={start1}  className="min-w-1 sm:w-full"/>
                <img src={start1} alt={start1} className="min-w-1 sm:w-full" />
                <img src={start1} alt={start1}  className="min-w-1 sm:w-full"/>
                <h3 className=" poppins-regular">4.8</h3>
              </div>
            </div>
            <div className="line  h-[2px] w-[65%] bg-[#207569] absolute top-25 left-1/5  sm:top-45 sm:left-1/5 "></div>
            <div className="text top-25 left-1/5 pt-4 absolute sm:top-45 sm:left-1/5">
              <p className=" text-[10px] sm:text-[18px] font-light ">
                "As a contractor, I rely on accuracy, and Pure Shades <br />
                delivers every time. I’ve been able to provide my clients <br />{" "}
                with precise estimates without any hassle."
              </p>
            </div>
          </div>
          <div className="icons absolute top-20 left-3  sm:top-26  sm:left-1/18  md:top-31 lg:top-35 lg:left-1/16 xl:top-28 xl:left-1/18 2xl:top-31">
            <div className="content   flex items-center justify-center shadow-[-20px_20px_40px_0px_rgba(0,0,0,0.17)]  rounded-[20px]  h-12 w-[50px]    sm:h-20 sm:w-[100px] cursor-pointer">
              <FaArrowLeftLong className="text-primary " />
            </div>
          </div>

          <div className="iconsecond absolute bottom-10 right-0  sm:bottom-19 md:bottom-22 md:right-2 sm:right-3 xl:right-0 xl:bottom-38 2xl:bottom-28 2xl:right-2">
            <div className="content-second   flex items-center justify-center   rounded-[20px]  bg-white  h-12 w-[50px] sm:h-16 sm:w-[65px]  md:h-20 md:w-[86px] cursor-pointer">
              <img src={svgr} alt=" bg-white " />
            </div>
          </div>
        </div>
      </div>
      <div className="frequently pt-[170px] sm:pt-[131px]">
        <p className="B4 montserrat flex justify-center">Got Questions?</p>
        <p className="B7 montserrat flex justify-center">
          Frequently Asked Questions
        </p>
        <p className=" flex justify-center T1">Clear Answers, Every Time.</p>
      </div>
      <div className="Accuratepaint space-y-5">
        {faqData.map((item, index) => (
          <div
            key={index}   
          >
            <div className="flex items-center justify-between">
              <p className=" md:text-[20px] text-[12px] font-bold    Montserrat pl-2">{item.question}</p>
              <IoChevronDownCircleOutline
                className={`text-primary w-10 h-10 cursor-pointer transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                onClick={() => toggleOpen(index)}
              />
            </div>

            {/* Conditionally show answer */}
            {openIndex === index && (
              <p className="mt-4 text-gray-600 montserrat text-sm pl-2">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Customer;
