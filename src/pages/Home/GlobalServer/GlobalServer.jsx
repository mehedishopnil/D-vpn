import backgroundImage from "../../../assets/earthShape.svg";
import iphoneIcon from "../../../assets/iPhone 14 Pro.svg";

const GlobalServer = () => {
  // Inline style for background image
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
  };

  return (
    <div
      className="relative w-full bg-cover bg-no-repeat pt-16"
      style={sectionStyle}
    >
      {/* Main content */}
      <div className="p-16 text-white text-center">
        <p className="text-2xl font-bold text-purple-700">
          Global Server Network
        </p>
        <h1 className="text-4xl leading-56 font-bold mb-4">
          Ultra-Fast Servers Around the World
        </h1>
        <p className="text-lg w-10/12 mx-auto">
          Choose among 1000+ high-speed VPN servers and enjoy fast and stable
          connections anywhere.
        </p>
      </div>

      {/* Server features section */}
      <div className="flex flex-col gap-5 items-center justify-center">
        <div>
          <img
            className="w-3/4 lg:w-full lg:h-1/2"
            src={iphoneIcon}
            alt="iPhone Icon"
          />
        </div>

        {/* Server features grid */}
        <div className="flex flex-col justify-center items-center drop-shadow-xl w-full -mt-20  text-white bg-black h-40">
          <div className="grid grid-cols-4 w-1/2 gap-10 -mt-16 bg-[#ffffff20] p-5 rounded-lg border border-[#ffffff10]">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-purple-700">100+</h1>
              <p className="text-gray-400">Countries</p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-purple-700">1,000+</h1>
              <p className="text-gray-400">Servers</p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-purple-700">100+</h1>
              <p className="text-gray-400">Locations</p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-purple-700">Unlimited</h1>
              <p className="text-gray-400">Bandwidth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Circular gradient on the left side with simulated blur */}
      <div className="absolute top-[350px] -left-[80px] bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
          style={{ transform: "translateX(-80%)", filter: "blur(60px)" }}
        ></div>
      </div>
    </div>
  );
};

export default GlobalServer;
