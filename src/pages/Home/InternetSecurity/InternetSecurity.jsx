import securityIcon from "../../../assets/internetSecurity.svg";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import halfPie from "../../../assets/halfPieIcone.svg";

const InternetSecurity = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-10 px-5 lg:px-20 py-10 lg:py-16 overflow-hidden">
      <div className="flex flex-col items-center lg:block text-center z-10 lg:text-left lg:w-1/2 space-y-7 relative">
        <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
          Access the Internet Securely and Privately
        </h2>
        <p className="text-[#797E86]">
          No one rejects, dislikes, or avoids pleasure itself, because it is
          pleasure, but because those who do not know.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex gap-2">
              <p className="text-lg text-[#701CB0]">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#878787] font-light">Dolor lorem amet ipsum</p>
            </div>
          ))}
        </div>

        <button className="btn bg-[#701CB0] rounded-full text-sm font-extrabold px-8 py-3 text-white border-[#55585E] hover:bg-[#592e8e]">
          See All Features
        </button>
      </div>

      <div className="relative mt-10 lg:mt-0 lg:w-1/2 ">
        <div className="flex flex-cols justify-end ">
          <div className="flex flex-col lg:block space-y-5 -mb-28 lg:mb-0">
            <div className="flex justify-center items-center rounded-lg border border-[#6b686d] gap-5 w-[130px] h-[45px] md:w-[162px] md:h-[60px] lg:w-[162px] lg:h-[60px] bg-[#FFFFFF25]">
              <div className="flex justify-center items-center text-white w-[35px] h-[35px] md:w-[46px] md:h-[46px] lg:w-[46px] lg:h-[46px] rounded-lg  bg-gradient-to-b from-[#701CB0] to-[#C45EFF]">
                <p className="text-sm md:text-lg lg:text-lg ">
                  <FaArrowUp />
                </p>
              </div>
              <div className="">
                <p className="text-[#6b686d] text-sm md:text-lg lg:text-lg ">Upload</p>
                <p className="text-white text-sm md:text-lg lg:text-lg font-bold">100Mbps</p>
              </div>
            </div>
            <div className="flex justify-center items-center rounded-lg border border-[#6b686d] gap-5 w-[130px] h-[45px] md:w-[162px] md:h-[60px] lg:w-[162px] lg:h-[60px] bg-[#FFFFFF25]">
              <div className="flex justify-center items-center text-white w-[35px] h-[35px] md:w-[46px] md:h-[46px] lg:w-[46px] lg:h-[46px] rounded-lg  bg-gradient-to-b from-[#701CB0] to-[#C45EFF]">
                <p className="text-sm md:text-lg lg:text-lg ">
                  <FaArrowUp />
                </p>
              </div>
              <div className="">
                <p className="text-[#6b686d] text-sm md:text-lg lg:text-lg ">Upload</p>
                <p className="text-white text-sm md:text-lg lg:text-lg font-bold">100Mbps</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={securityIcon}
          alt="hero"
          className="mx-auto lg:mx-0 lg:w-full lg:max-w-lg"
        />

        <div className=" flex flex-col justify-center items-center w-[180px] h-[130px] md:w-[240px] md:h-[187px] lg:w-[240px] lg:h-[187px] p-2 -mt-20 rounded-lg border border-[#6b686d] bg-[#FFFFFF25] gap-5 ">
          <img src={halfPie} alt="hero" className=" w-[110px] md:w-[150px] lg:w-[150px]" />
          <h1 className="text-white font-bold text-[20px] md:text-[28px] lg:text-[28px] -mt-10">57,5</h1>
          <div className="w-[100px] h-[8px] md:w-[104px] md:h-[12px] lg:w-[104px] lg:h-[12px] rounded-full bg-white"></div>
          <div className="w-[120px] h-[8px] md:w-[158px] md:h-[12px] lg:w-[158px] lg:h-[12px] rounded-full -mt-3 bg-white"></div>
        </div>
      </div>

      
    </div>
  );
};

export default InternetSecurity;
