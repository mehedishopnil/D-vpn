import dotIcon from "../../../assets/dvpnDotIcon.svg";

const VPNRoadmap = () => {
  return (
    <div className="my-[150px] relative">
      {/* Roadmap Title */}
      <h1 className="text-[48px] text-center text-white ">D-VPN Roadmap</h1>

      {/* Roadmap Items */}
      <div className="flex flex-col items-center gap-10 pt-[75px] sm:flex-row sm:justify-center sm:gap-5">
        {/* Roadmap Item 1 */}
        <div className="w-full sm:w-[412px]">
          <p className="text-[11px] font-light text-white mb-5 sm:mb-10">
            END OF Q4 2021
          </p>
          <div className="rounded-xl border border-[#ffffff30] bg-black px-5 py-10">
            <div className="flex items-center gap-5">
              <img src={dotIcon} alt="" />
              <h1 className="text-[24px] text-white">Define goals</h1>
            </div>
            <p className="text-[13px] text-white mt-5">
              Lorem ipsum dolor sit amet consectetur. Tincidunt ac eu est semper
              quisque dictum sem interdum ut. Euismod vel lacus at magna
              fringilla
            </p>
          </div>
        </div>

        {/* Roadmap Item 2 */}
        <div className="w-full sm:w-[412px]">
          <p className="text-[11px] font-light text-white mb-5 sm:mb-10">
            END OF Q4 2021
          </p>
          <div className="rounded-xl border border-[#ffffff30] bg-black px-5 py-10">
            <div className="flex items-center gap-5">
              <img src={dotIcon} alt="" />
              <h1 className="text-[24px] text-white">Define goals</h1>
            </div>
            <p className="text-[13px] text-white mt-5">
              Lorem ipsum dolor sit amet consectetur. Tincidunt ac eu est semper
              quisque dictum sem interdum ut. Euismod vel lacus at magna
              fringilla
            </p>
          </div>
        </div>

        {/* Roadmap Item 3 */}
        <div className="w-full sm:w-[412px]">
          <p className="text-[11px] font-light text-white mb-5 sm:mb-10">
            END OF Q4 2021
          </p>
          <div className="rounded-xl border border-[#ffffff30] bg-black px-5 py-10">
            <div className="flex items-center gap-5">
              <img src={dotIcon} alt="" />
              <h1 className="text-[24px] text-white">Define goals</h1>
            </div>
            <p className="text-[13px] text-white mt-5">
              Lorem ipsum dolor sit amet consectetur. Tincidunt ac eu est semper
              quisque dictum sem interdum ut. Euismod vel lacus at magna
              fringilla
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPNRoadmap;
