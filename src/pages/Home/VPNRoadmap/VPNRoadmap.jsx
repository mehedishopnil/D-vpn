import dotIcon from "../../../assets/dvpnDotIcon.svg";

const VPNRoadmap = () => {
  return (
    <div className="py-10 relative">
      <h1 className="text-[48px] text-center text-white ">D-VPN Roadmap</h1>

      <div className="flex justify-center gap-5 pt-[75px]">
        <div>
          <p className="text-[11px] font-light text-white mb-10">
            END OF Q4 2021
          </p>
          <div className="w-[412px] rounded-xl border border-[#ffffff30]  bg-black px-5 py-10">
            <div className="flex items-center gap-10 ">
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

        <div>
          <p className="text-[11px] font-light text-white mb-10">
            END OF Q4 2021
          </p>
          <div className="w-[412px] rounded-xl border border-[#ffffff30]  bg-black px-5 py-10">
            <div className="flex items-center gap-10 ">
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

        <div>
          <p className="text-[11px] font-light text-white mb-10">
            END OF Q4 2021
          </p>
          <div className="w-[412px] rounded-xl border border-[#ffffff30]  bg-black px-5 py-10">
            <div className="flex items-center gap-10 ">
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

      {/* Circular gradient on the left side with simulated blur */}
      <div className="absolute top-0 left-0 bottom-0 w-[445px] h-[745px] rounded-r-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
          style={{
            transform: "translateX(-80%)",
            filter: "blur(60px)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default VPNRoadmap;
