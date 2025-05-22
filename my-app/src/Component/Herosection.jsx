import React from "react";
import Navbar from "./Navbar";
import icon1 from "/public/Heroimg/icon.png";
import img1 from "/public/Heroimg/istpic.png";
import img2 from "/public/Heroimg/imgsecond.png";
import img3 from "/public/Heroimg/imgthird.png";
const Herosection = () => {
  return (
    <div className="herosection ">
      <Navbar />
      <div className=" md:container md:mx-auto px-[20px]  flex flex-col justify-center  ">
       
        <div className="outer flex flex-col-reverse lg:flex-row md:justify-between justify-center  ">
          <div className="main  pt-30 flex flex-col  gap-7  max-w-[747px] w-full justify-center  ">
            <p className="montserrat lighttext flex justify-center sm:block">
              Accurate, Fast, & Tailored Paint Pricing{" "}
            </p>
            <h1 className="flex justify-center sm:block">
              Find Your Perfect <br />
              Paint Estimate
            </h1>
            <h3 className="flex justify-center sm:block">
              With Pure Shades, you can easily calculate the exact amount of
              paint needed for <br />
              your project. Enter your wall dimensions, choose your paint, and
              get an instant, <br /> precise estimate. Say goodbye to guesswork
              and hello to hassle-free painting.
            </h3>
            <div className="btn  flex justify-center md:block">
              <button
                className="button text-white px-[26px] py-[13px]  navtext bg-primary rounded-[10px] flex items-center gap-[10px] cursor-pointer
  "
              >
                Get my Estimate
                <div className="img">
                  <img src={icon1} alt={icon1} />
                </div>
              </button>
            </div>
          </div>
          <div className=" sm:w-[628px] sm:h-[450px]  w-[320px] relative  h-[500px] pl-20 pr-2 md:pl-0 md:pr-0 ">
            <div className="right-side    ">
              <div className="relative ">
                <img
                  className="ist-pic absolute right-0 top-30 md:animate-bounce"
                  src={img1}
                  alt="img1"
                />

                <img
                  className="ist-pic absolute top-45 right-30  md:animate-bounce "
                  src={img2}
                  alt={img2}
                />

                <img
                  src={img3}
                  alt={img3}
                  className="ist-pic absolute top-90 right-7 md:animate-bounce "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="detail ">
        <div className="content-project-detail flex flex-col  gap-6 justify-center  md:flex-row   w-full md:justify-between items-center pt-10  sm:gap-8">
          <div className="project-dwtails flex flex-col gap-[9px] sm:pt-[92px]  ">
            <h2 className="text-gradient">24K</h2>
            <h4>Completed Projects</h4>
            <p className="T1">
              We’ve successfully finished over 24,000 + paint jobs <br />
              for interiors and exterior
            </p>
          </div>
          <div className="project-dwtails flex flex-col gap-[9px] sm:pt-[92px]">
            <h2 className="text-gradient">85%</h2>
            <h4>Completed Projects</h4>
            <p className="T1">
              We’ve successfully finished over 24,000 + paint jobs <br />
              for interiors and exterior
            </p>
          </div>

          <div className="project-dwtails flex flex-col gap-[9px] sm:pt-[92px]">
            <h2 className="text-gradient">9.5/10</h2>
            <h4>Completed Projects</h4>
            <p className="T1">
              We’ve successfully finished over 24,000 + paint jobs <br />
              for interiors and exterior
            </p>
          </div>
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default Herosection;
