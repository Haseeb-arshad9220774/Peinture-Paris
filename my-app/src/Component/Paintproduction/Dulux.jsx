import React, { useState } from "react";
import svgr from "/public/Explorepaint/svgt.svg";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { SearchOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
import duluxpic from "/public/Paintproduction/duluxpic.png";
const Dulux = () => {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const brands = [
    "Dulux",
    "Asian Paints",
    "Berger",
    "Nerolac",
    "Sherwin-Williams",
  ];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectBrand = (brand) => {
    setSelectedBrand(brand);
    setIsDropdownOpen(false);
  };

  const paintCards = [
    {
      id: 1,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },
    {
      id: 2,
      title: "Dulux wall paint",
      image: duluxpic,
      colorName: "Emerald red",
      colorHex: "#FF3131",
    },

    // Add more if needed
  ];
  return (
    <div className="main  flex justify-center">
    <div className="main container sm:mx-auto px-[20px] pt-[20px]  ">
      <div className="innerfrst ">

      <div className="inner-content grid grid-cols-1 justify-center sm:gap-5 sm:grid-cols-2  md:justify-between items-center ">
        <div className="right-side flex  gap-10">
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
              className={`B8 cursor-pointer pb-1 ${
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
        <div className="outer  ">
        <div className="left-side flex justify-end gap-[15px] relative">
          {/* Dropdown Selector */}
          <div className="content flex gap-5 justify-between items-center px-4 shadow-[-10px_20px_40px_0px_rgba(0,0,0,0.12)] h-[50px] w-[250px] rounded-lg relative">
            <input
              type="text"
              value={selectedBrand}
              onChange={() => {}}
              placeholder="Select Brand"
              className="outline-none T1 text-[#C9C4C4] pl-2.5 bg-transparent w-full"
              readOnly
            />
            <div className="icon cursor-pointer" onClick={toggleDropdown}>
              <DownOutlined />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-[55px] left-0 bg-white w-full shadow-md rounded-lg z-10">
                {brands.map((brand, idx) => (
                  <div
                    key={idx}
                    onClick={() => selectBrand(brand)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="second-content flex gap-5 justify-between items-center shadow-[-10px_20px_40px_0px_rgba(0,0,0,0.12)] h-[50px] w-[250px] px-4 rounded-lg">
            <input
              type="text"
              placeholder="Search paint"
              className="outline-none T1 text-[#C9C4C4] pl-2.5 bg-transparent w-full"
            />
            <div className="icon">
              <SearchOutlined className="cursor-pointer" />
            </div>
          </div>
        </div>
        </div>
      </div>
<div className="pt-[58px] paits-section grid grid-cols-2 sm:grid-cols-2 mx-auto  md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">

        {paintCards.map((card) => (
          <div
            key={card.id}
            className="img max-w-[240px] w-full h-[257px] shadow-[-10px_20px_40px_0px_rgba(0,0,0,0.12)] bg-white rounded-lg hover:scale-110 ease-in-out duration-700 hover:border-3 hover:border-primary"
          >
            <div className="icon hidden group-hover:flex justify-end pt-1 pr-2 text-primary transition duration-200  ">
              <BsArrowUpRightCircle className=" " />
            </div>
            <div className="content flex justify-center pt-[24px]">
              <img src={card.image} alt={card.title} />
            </div>

            <p className="B4 flex justify-center pt-[26px]">{card.title}</p>

            <div className="content flex pt-2.5 pl-8 gap-1 items-center">
              <div
                className="red-content w-5 h-5 rounded-[4px]"
                style={{ backgroundColor: card.colorHex }}
              ></div>
              <p className="T1 text-[#2B313E]">{card.colorName}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lastsectionof pt-2  w-full  items-center gap-2 flex justify-center pb-10">
        <div className="inne w-[200px] h-[60px] bg-white shadow-[-10px_20px_40px_0px_rgba(0,0,0,0.12)] flex items-center gap-2  justify-center rounded-[12.5px] hover:bg-primary hover:text-white cursor-pointer">
          <p className="text-primary hover:text-white  grotesk  ">See more</p>
          <img src={svgr} alt="" />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Dulux;
