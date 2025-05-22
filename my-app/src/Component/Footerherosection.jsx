import React from "react";
import backgroundimg from "/public/Heroimg/backgroundimg.png";
import demoimg from "/public/Heroimg/demo.png";
import arrow1 from "/public/Heroimg/arrowbutton.png";
import PROIMG from "/public/Heroimg/PRO.png";
import customized from "/public/Heroimg/Customization.png";
const Footerherosection = () => {
  const cardData = [
   {
      id: 1,
      title: "Fast & Simple",
      description: `Get your quote in seconds, and   make confident decisions for your project`,
      image: demoimg,
      icon: arrow1,
    },
    {
      id: 1,
      title: "Customization ",
      description: `Tailor your estimate with the choice of your paint type, quality, and quantity`,
      image: demoimg,
      icon: customized,
    },
    {
      id: 1,
      title: "Pro-Grade Accuracy",
      description: `Trusted by the professionals, Pure Shades provides the precision you need.`,
      image: demoimg,
      icon: PROIMG,
    },
    {
      id: 1,
      title: "Pro-Grade Accuracy",
      description: `Trusted by the professionals, Pure Shades provides the precision you need.`,
      image: demoimg,
      icon: PROIMG,
    },
    
    // Add more card objects if needed
  ];

  return (
    <div className=" footer w-full h-full  bg-cover bg-center bg-no-repeat py-16  bg-green-50">
      <div className="">
      <div className="footermain   flex flex-col justify-end md:gap-[50px] lg:gap-[70px] items-center  ">
        <div className="content  ">
          <p className="B4 text-center Montserrat lg:text-white text-black  md:pt-[200px]  ">Why Choose Peinture paris</p>
          <p className="B6 pt-[0px] lg:pt-[18px]  lg:text-white text-black  overflow-hidden  ">
            Tailored Solutions and Premium Paint for <br />
            Every Project
          </p>
        </div>
        <div className="main flex gap-10 justify-center">
          {/* <div className="cards relative ">
            <img src={demoimg} alt={demoimg} className="" />
            <div className="content absolute top-25 left-8">
              <h4 className="montserrat ">Precision Estimates</h4>
              <p className=" flex  items-center justify-center ">
                We calculate the exact amount of <br /> paint needed, reducing
                waste and <br /> saving money.
              </p>
            </div>
          </div> */}
          <div className=" cards-wrapper grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 pt-2   gap-10 ">
            {cardData.map((card, index) => (
              <div className="cards relative " key={index}>
                <img src={card.image} alt="Card" className=" shadow-[-20px_20px_40px_0px_rgba(0,0,0,0.2)] rounded-b-[20px]" />

                <div className="content absolute top-25 sm:top-25 left-8">
                  <h4 className="montserrat">{card.title}</h4>
                  <p className=" flex items-center justify-center whitespace-pre-line">
                    {card.description}
                  </p>
                </div>

                <div className="img absolute top-0 left-28  h-[60px] w-[74px] sm:left-28 bg-white lg:left-29 lg:h-[60px] lg:w-[74px] xl:left-28 xl:h-[60px] xl:w-[74px]  sm:h-[60px] sm:w-[74px] rounded-[20px] items-center flex justify-center">
                  <img src={card.icon} alt="icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footerherosection;
