import { FaArrowRight } from "react-icons/fa6";
import { IoImage } from "react-icons/io5";
import { SiSpringsecurity } from "react-icons/si";
import { TbWorldSearch } from "react-icons/tb";

const AvailableServers = () => {
  return (
    <div className="lg:w-full relative mt-32 lg:space-x-16 md:mt-40 lg:mt-[280px] lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
      <div className="relative md:flex lg:flex lg:justify-center md:justify-center  bg-[#ffffff10] border border-[#ffffff23] space-y-4 lg:space-y-2 px-6 lg:px-10 py-8 rounded-xl">
        {/* Server List Container */}
        <div className="rounded-xl bg-white p-4">
          <h1 className="text-xl lg:text-2xl font-semibold pb-4">
            Available Servers
          </h1>

          {/* Loop through server entries */}
          {[1, 2, 3, 4, 5].map((server) => (
            <div
              key={server}
              className="grid grid-cols-2 rounded-lg bg-[#F2F8F7] p-4 mb-4"
            >
              {/* Server Information */}
              <div className="flex items-center gap-3">
                <IoImage />
                <p>United States</p>
              </div>

              {/* Checkbox Section */}
              <div className="flex justify-end items-center">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center top-16 -left-5 absolute rounded-2xl bottom-0 bg-[#701CB0] w-[64px] h-[64px]">
          <p className="flex text-2xl text-white ">
            <SiSpringsecurity />
          </p>
        </div>

        <div className="flex items-center justify-center bottom-16 -right-5 absolute rounded-2xl  bg-[#701CB0] w-[64px] h-[64px]">
          <p className="flex text-2xl text-white ">
            <TbWorldSearch />
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-8 flex flex-col items-center lg:flex lg:flex-col lg:justify-center md:flex md:justify-center lg:items-start z-10 lg:w-10/12 text-center lg:text-left space-y-6 lg:space-y-7 px-6 lg:px-0">
        <h2 className="text-3xl lg:text-5xl leading-tight text-white">
          More Than 100 Server Options are Available
        </h2>
        <p className="text-[#797E86]">
          No one rejects, dislikes, or avoids pleasure itself, because it is
          pleasure, but because those who do not know how to pursue pleasure
          rationally encounter consequences that.
        </p>
        {/* Download Apps Button */}
        <button className="flex  w-[230px] btn bg-[#701CB0] rounded-full text-sm font-extrabold px-8 py-3 text-white border-[#55585E] hover:bg-[#592e8e]">
          Download Apps <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AvailableServers;
