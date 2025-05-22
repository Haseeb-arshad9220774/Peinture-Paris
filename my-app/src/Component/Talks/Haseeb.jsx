import React, { useState, useEffect } from "react";

import icon1 from "/public/Heroimg/icon.png";
import img1 from "/public/Heroimg/istpic.png";
import img2 from "/public/Heroimg/imgsecond.png";
import img3 from "/public/Heroimg/imgthird.png";

const images = [img1, img2, img3];

const Haseeb = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true); // trigger shrink animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length); // change image
        setAnimateOut(false); // reset for next animation
      }, 500); // match with shrink duration
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="herosection relative">
      {/* <Navbar /> */}
      <div className="container mx-auto">
        <div className="outer flex relative">
          <div className="main pt-30 flex flex-col gap-7">
            <p className="montserrat lighttext">
              Accurate, Fast, & Tailored Paint Pricing
            </p>
            <h1>
              Find Your Perfect <br />
              Paint Estimate
            </h1>
            <h3>
              With Pure Shades, you can easily calculate the exact amount of
              paint needed for <br />
              your project. Enter your wall dimensions, choose your paint, and
              get an instant, <br /> precise estimate. Say goodbye to guesswork
              and hello to hassle-free painting.
            </h3>
            <div className="btn">
              <button className="button text-white px-[26px] py-[13px] navtext bg-primary rounded-[10px] flex items-center gap-[10px] cursor-pointer">
                Get my Estimate
                <div className="img">
                  <img src={icon1} alt="icon" />
                </div>
              </button>
            </div>
          </div>

          {/* Animated Image */}
          <div className="absolute right-0 top-30">
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt="rotating"
              className={`transition-transform duration-500 ${
                animateOut
                  ? "scale-0 opacity-0"
                  : "scale-100 opacity-100"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haseeb;
