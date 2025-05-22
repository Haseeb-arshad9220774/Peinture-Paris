import React from "react";
import imgcard1 from "/public/Explorepaint/iimgno1.png";
import imgcard2 from "/public/Explorepaint/imgno2.png";
import imgcard3 from "/public/Explorepaint/imgno3.png";
import imgcard4 from "/public/Explorepaint/imgno4.png";
import smallcard1 from "/public/Explorepaint/smallcards.png";
import calcutr1 from "/public/Explorepaint/calculator.png";
import sofapic from "/public/Explorepaint/sofa.png";
import wallpic from "/public/Explorepaint/wall.png";
import svgr from "/public/Explorepaint/svgt.svg";
import { BsArrowRight } from "react-icons/bs";
import mis from "/public/Explorepaint/miscalaneous.png";
const Custompaint = () => {
  return (
    <div className=" container mx-auto flex justify-center sm:justify-between main-content-paints pt-[76px]  xl:justify-center  ">
<div className="outermain px-[20px] sm:px-0 grid grid-cols-1 xl:grid-cols-2  lg:justify-items-center xl:justify-items-stretch">

        <div className="control flex justify-center   ">
        <div className="mainn max-w-[800px] w-full flex justify-center flex-col  ">
          <div className="left-side-content grid grid-cols-1 sm:grid-cols-2   cards  gap-12.5  bg-primary ">
            <div className="outer flex justify-center ">
              <div className="main ">
            <div className="imgno relative   sm:max-w-[300px] w-full   flex ">
              <img src={smallcard1} alt={smallcard1} className="relative " />
              <div className="text-left-side absolute top-8 left-31">
                <div className="innerdiv flex flex-col gap-4">
                  <h4 className="">
                    Custom Paint <br /> Estimates
                  </h4>
                  <p className="T1">
                    Receive precise, <br /> tailored estimates
                  </p>
                </div>
              </div>

              <div className="image absolute top-12">
                <img
                  src={calcutr1}
                  alt={calcutr1}
                  className="px-[23px] py-[17px] bg-white rounded-[21px]"
                />
              </div>
            </div>
            </div>
            </div>

            <div className="handlecards pt-15  flex justify-center">
              <div className="main">
              <div className="img-second relative max-w-[300px] w-full ">
                <img src={smallcard1} alt={smallcard1} className="relative " />
                <div className="text-second absolute top-8 left-31">
                  <div className="inner-second flex flex-col gap-4">
                    <h4 className="">
                      Furniture <br /> Estimates
                    </h4>
                    <p className="T1">
                      We protect and move <br />
                      your furniture
                    </p>
                  </div>
                </div>

                <div className="image-second absolute top-12">
                  <img
                    src={sofapic}
                    alt={sofapic}
                    className="px-[23px] py-[17px] bg-white rounded-[21px]"
                  />
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className="main mt-10   flex justify-center w-full  bg-primary">
            <div className="main">
            <div className="left-side-content cards grid grid-cols-1 sm:grid-cols-2 gap-12.5   ">
              <div className="imgno relative w-[300px]  md:ml-16 ">
                <img src={smallcard1} alt={smallcard1} className="relative " />
                <div className="text-left-side absolute top-8 left-31">
                  <div className="innerdiv flex flex-col gap-4">
                    <h4 className="">
                    Wall Crack  <br /> Estimates
                    </h4>
                    <p className="T1">
                      We fix cracks for a<br />smooth finish
                    </p>
                  </div>
                </div>

                <div className="image absolute top-12 xl:top-12">
                  <img
                    src={wallpic}
                    alt={calcutr1}
                    className="px-[23px] py-[17px] bg-white rounded-[21px]"
                  />
                </div>
              </div>

              <div className="handlecards pt-15">
                <div className="img-second relative w-[300px] ">
                  <img
                    src={smallcard1}
                    alt={smallcard1}
                    className="relative "
                  />
                  <div className="text-second absolute top-8 left-31">
                    <div className="inner-second flex flex-col gap-4">
                      <h4 className="">
                       Post-Paint <br /> Cleaning
                      </h4>
                      <p className="T1">
                       We clean up after the  <br />
                        job is done
                      </p>
                    </div>
                  </div>

                  <div className="image-second absolute top-12 xl:top-12">
                    <img
                      src={mis}
                      alt={sofapic}
                      className="px-[23px] py-[17px] bg-white rounded-[21px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div className="control flex justify-center">
        <div className="main-right-side flex flex-col justify-center items-center md:block">
        <div className="right-side  pt-5 md:pt-0">
          <div className="right-side flex flex-col justify-center  w-full  lg:block    lg:max-w-[500px]">
            <div className="text flex gap-3 items-center">
              <div className="heading max-w-[242px ] w-full">
                <p className="B7">
                  {" "}
                  What <br /> we offer
                </p>
              </div>
              <div className="para max-w-[242px] w-full">
                <p className="T1 text-right montserrat text-Gray">Tailored Solutions and Premium Paint for Every Project</p>
              </div>
            </div>
            <div className="paragr max-w-[525px] h-[249px] flex flex-col gap-[30px]">
              <div className="paragraph sm:pt-[42px]">
                <p className="T1 text-Gray">
                  At Peinture paris, we combine cutting-edge technology with the
                  finest quality paints to bring you fast, accurate, and
                  customized paint estimat
                </p>
              </div>
              <div className="paragraph  ">
                <p className="T1 text-[#8D8D8D]">
                  Whether you're working on a small room or a large exterior
                  project, we ensure precision at every step. From selecting the
                  best brands to calculating exact quantities, we make the
                  process simple, efficient, and reliable.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="btn  md:pt-28 flex justify-center lg:block ">
            <div className="data group h-[60px] max-w-[260px] flex justify-center items-center rounded-[12.5px] bg-white shadow-[-10px_20px_40px_0px_rgba(0,0,0,0.12)] hover:bg-primary transition-all duration-300">
  <div className="conten  bg-gradient-to-r from-[#00A7B3] to-[#1B5E20] bg-clip-text text-transparent flex items-center gap-2 group-hover:text-white transition-all duration-300 cursor-pointer">
    <p className="bg-gradient-to-r from-[#00A7B3] to-[#1B5E20] bg-clip-text text-transparent flex items-center gap-2 group-hover:text-white transition-all duration-300 cursor-pointer">
      Get my estimate
       <BsArrowRight   className="text-primary " />
    </p>
   
  </div>
</div>

          </div>
        </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Custompaint;
