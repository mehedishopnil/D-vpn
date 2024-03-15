import backgroundImage from "../../../assets/earthShape.svg";
import iphoneIcon from "../../../assets/iPhone 14 Pro.svg";
import { TbWorld } from "react-icons/tb";

const GlobalServer = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-no-repeat py-16"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Main content */}
        <div className="container mx-auto text-white text-center">
          <p className="text-2xl font-bold text-purple-700">Global Server Network</p>
          <h1 className="text-4xl leading-10 lg:leading-14 font-bold mb-4">
            Ultra-Fast Servers Around the World
          </h1>
          <p className="text-lg lg:w-10/12 mx-auto">
            Choose among 1000+ high-speed VPN servers and enjoy fast and stable connections anywhere.
          </p>
        </div>
      </div>

      {/* Server features section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-5 mt-10 lg:mt-20">
        <div className="w-full lg:w-1/2 relative">
          <img className="w-3/4 lg:w-full lg:h-1/2 mx-auto" src={iphoneIcon} alt="iPhone Icon" />
          <div className="absolute w-32 h-32 bg-[#701CB0] rounded-full top-[50%] right-[10%] lg:right-[5%] transform -translate-y-1/2 lg:translate-y-0">
            <p className="absolute text-white text-6xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><TbWorld /></p>
          </div>
        </div>

        {/* Server features grid */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 bg-[#00000070] p-6 lg:p-10 rounded-lg border border-[#ffffff10]">
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-purple-700">100+</h1>
              <p className="text-gray-400">Countries</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-purple-700">1,000+</h1>
              <p className="text-gray-400">Servers</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-purple-700">100+</h1>
              <p className="text-gray-400">Locations</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold text-purple-700">Unlimited</h1>
              <p className="text-gray-400">Bandwidth</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GlobalServer;
