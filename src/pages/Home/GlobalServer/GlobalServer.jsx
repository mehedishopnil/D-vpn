import backgroundImage from "../../../assets/earthShape.svg";
import iphoneIcon from "../../../assets/iPhone 14 Pro.svg";
import { TbWorld } from "react-icons/tb";

const GlobalServer = () => {
  return (
    <div
      className="flex flex-col items-center mt-10 md:mt-32"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="relative">
        {/* Main content */}
        <div className="flex flex-col items-center gap-5 text-white text-center pt-16">
          <p className="text-xl md:text-2xl font-bold text-purple-700">
            Global Server Network
          </p>
          <h1 className="text-2xl md:text-4xl lg:w-[500px] leading-10 md:leading-14 font-bold mb-4">
            Ultra-Fast Servers Around the World
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-normal lg:w-[628px] mx-auto">
            Choose among 1000+ high-speed VPN servers and enjoy fast and stable
            connections anywhere.
          </p>
        </div>

        {/* Image (iphoneIcon) */}
        <div className="relative flex justify-center mt-10">
          <img
            className="w-3/4 h-10/12 md:w-full md:max-w-md lg:w-[544px] lg:h-[924px] mx-auto"
            src={iphoneIcon}
            alt="iPhone Icon"
          />
          <div className="absolute w-10 h-10 md:w-16 md:h-16 lg:w-32 lg:h-32 bg-[#701CB0] rounded-full top-[50%] lg:top-[35%] right-[10%] lg:right-[0] transform -translate-y-1/2 lg:translate-y-0">
            <p className="absolute text-white text-3xl md:text-4xl lg:text-6xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <TbWorld />
            </p>
          </div>
        </div>
      </div>

      {/* Server features grid */}
      <div className="w-full lg:w-full z-10 pb-16 flex flex-col items-center justify-center mt-10 lg:mt-20 bg-black">
        <div className="md:w-full md:flex md:justify-center  lg:flex lg:justify-center space-y-5 md:space-y-0 md:gap-8 lg:gap-10 rounded-lg border border-[#ffffff35] bg-[#ffffff25] py-5 px-10 overflow-hidden">
          <div className="text-center">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-purple-700">
              100+
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">Countries</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-purple-700">
              1,000+
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">Servers</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-purple-700">
              100+
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">Locations</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-purple-700">
              Unlimited
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">Bandwidth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalServer;
