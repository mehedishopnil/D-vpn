import securityIcon from "../../../assets/internetSecurity.svg";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import halfPie from "../../../assets/halfPieIcone.svg";

const InternetSecurity = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-10 px-5 lg:px-20 py-10 lg:py-16">
      <div className="text-center lg:text-left lg:w-1/2 space-y-7 relative">
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

      <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
        <div className="flex flex-cols justify-end ">
          <div className="space-y-5 -mb-28 lg:mb-0">
            <div className="flex justify-center items-center rounded-lg border border-[#6b686d] gap-5 w-[162px] h-[60px] bg-[#FFFFFF25]">
              <div className="flex justify-center items-center text-white w-[46px] h-[46px] rounded-lg  bg-gradient-to-b from-[#701CB0] to-[#C45EFF]">
                <p>
                  <FaArrowUp />
                </p>
              </div>
              <div className="">
                <p className="text-[#6b686d]">Upload</p>
                <p className="text-white font-bold">100Mbps</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 rounded-lg border border-[#6b686d] w-[162px] h-[60px] bg-[#FFFFFF25]">
              <div className="flex justify-center items-center text-white w-[46px] h-[46px] rounded-lg  bg-gradient-to-b from-[#701CB0] to-[#C45EFF]">
                <p>
                  <FaArrowDown />
                </p>
              </div>
              <div className="">
                <p className="text-[#6b686d]">Upload</p>
                <p className="text-white font-bold">300Mbps</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={securityIcon}
          alt="hero"
          className="mx-auto lg:mx-0 lg:w-full lg:max-w-lg"
        />

        <div className=" flex flex-col justify-center items-center w-[240px] h-[187px] p-2 -mt-20 rounded-lg border border-[#6b686d] bg-[#FFFFFF25] gap-5 ">
          <img src={halfPie} alt="hero" className="" />
          <h1 className="text-white font-bold text-[28px] -mt-10">57,5</h1>
          <div className="w-[104px] h-[12px] rounded-full bg-white"></div>
          <div className="w-[158px] h-[12px] rounded-full -mt-3 bg-white"></div>
        </div>
      </div>

      {/* Circular gradient on the right side with simulated blur */}
      <div className="absolute top-[200px] -right-[30px] bottom-0 w-[445px] h-[845px] rounded-l-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#9C25EA75] to-[#701CB030] rounded-l-full"
          style={{
            transform: "translateX(60%)",
            filter: "blur(100px)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default InternetSecurity;
