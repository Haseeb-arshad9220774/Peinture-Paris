import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import message1 from "/public/Letstalksicons/message.png";
import phonecall1 from "/public/Letstalksicons/phone.png";
import background from "/public/Letstalksicons/bgpic.png";

const Letstalk = () => {
  return (
    <div className="main-Talks sm:pb-[277px] flex justify-center">
      <div className="container  sm:mx-auto px-[20px]  w-full main-content pt-[131px] grid grid-cols-1 md:grid-cols-2 md:justify-between ">
        <div className="main flex justify-center md:block">
        <div className="left-side max-w-[500px] w-full  ">
          <div className="content  flex flex-col gap-7.5">
            <h2 className="montserrat">Let’s Talk</h2>
            <p className="text-Gray T1">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help
            </p>
            <div className="content flex  flex-col gap-[15px]">
              <div className="message flex items-center gap-5">
                <img src={message1} alt={message1} />
                <p className=" text-blue-50 T2">peintureparis@gmail.com</p>
              </div>
              <div className="call flex items-center gap-5">
                <img src={phonecall1} alt={phonecall1} />
                <p className=" T2 text-blue-50 T2">+552 890123409</p>
              </div>
            </div>
          </div>

          


        </div>
        </div>
          <div className="main flex justify-center sm:pt-10 md:pt-0 md:block">
        <div className="right-side-content ">
        <div className="right-side max-w-[698px] w-full   shadow-[-20px_20px_40px_0px_rgba(0,0,0,0.17)] rounded-2xl">
          <div className="foam-content flex flex-col gap-[35px] px-9.5 pt-[35px]">
            <div className="foams flex gap-5">
              <div className="firstname flex flex-col gap-2.5">
                <p className="T1 text-black">First name</p>
                <div className="inpu max-w-[300px] w-full">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="T1 tex-Gray outline-none"
                  />
                </div>
              </div>
              <div className="Lastname flex flex-col gap-2.5">
                <p className="T1 text-black">Last name</p>
                <div className="inpu max-w-[300px] w-full">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="T1 Gray outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="foams flex gap-8.5">
              <div className="firstname flex flex-col gap-2.5">
                <p className="T1 text-black">Email</p>
                <div className="inpu max-w-[300px] w-full">
                  <input
                    type="Email"
                    placeholder="Your Email"
                    className="T1 tex-Gray outline-none"
                  />
                </div>
              </div>
              <div className="Lastname flex flex-col gap-2.5">
                <p className="T1 text-black">Phone number</p>
                <div className="inpu max-w-[300px] w-full">
                  <input
                    type="text"
                    placeholder="Your phone number"
                    className="T1 Gray outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="yourmessage flex flex-col gap-5">
              <p className="T1 text-black">Your message</p>
              <div className="inpu ">
                <textarea
                  placeholder="Write here"
                  className="T1 outline-none   max-w-[622px] w-full h-[96px] resize-none underline-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="btn flex justify-center sm:justify-end sm:pb-[33px] pt-[62px]">
            <button className='button text-white px-[53px] py-[13px] flex items-center gap-1  navtext bg-primary rounded-[10px] cursor-pointer
  '>
           Submit
           <IoIosSend />
        </button>
          </div>

        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Letstalk;
