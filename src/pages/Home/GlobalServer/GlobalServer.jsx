import React from "react";
import backgroundImage from "../../../assets/earthShape.svg";
import iphoneIcon from "../../../assets/iPhone 14 Pro.svg";
const GlobalServer = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
  };

  return (
    <div className="w-full bg-cover  bg-no-repeat pt-20" style={sectionStyle}>
      <div className="p-16 text-white text-center">
        <p className="text-lg">Global Server Network</p>
        <h1 className="text-4xl font-semibold mb-4">
          Ultra-Fast Servers Around the World
        </h1>
        <p className="text-lg">
          Choose among 1000+ high-speed VPN servers and enjoy fast and stable
          connections anywhere.
        </p>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <img className="w-[544px] h-[924px]" src={iphoneIcon} alt="" />

        <div>
        <div className="flex justify-between items-center gap-10 px-10 py-5 -mt-20 rounded-lg bg-[#ffffff30] shadow-lg text-black">
          <div className="text-center">
            <h1 className="text-2xl text-[#701CB0] font-bold">100+</h1>
            <p className="text-[#797E86]">Countries</p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl text-[#701CB0] font-bold">1,000+</h1>
            <p className="text-[#797E86]">Servers</p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl text-[#701CB0] font-bold">100+</h1>
            <p className="text-[#797E86]">Locations</p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl text-[#701CB0] font-bold">Unlimited</h1>
            <p className="text-[#797E86]">Bandwidth</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalServer;
