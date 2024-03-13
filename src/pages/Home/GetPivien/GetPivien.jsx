import mackbookIphone from "../../../assets/macbookiphone14mockup11fp 1.svg";
import { FaArrowRight } from "react-icons/fa6";
import "./GetPivien.css";

const GetPivien = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-10 px-5 lg:px-20 py-10 lg:py-16">
      <div className="text-center lg:text-left lg:w-1/2 space-y-7 relative">
        {/* Apply gradient to the text */}
        <p className="text-[20px] font-bold relative z-10 gradient-text">
          Fun. Fast. Free.
        </p>
        <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
          Stay <span className="text-[#701CB0]">Private</span> and
          <br /> Access Worldwide Content
        </h2>
        <p className="text-[#797E86]">
          Surf the web without tracking with a VPN, protect your devices &
          identity with an all-in-one app.
        </p>
        <button className="btn bg-[#701CB0] rounded-full text-sm font-extrabold px-8 py-3 text-white border-[#55585E] hover:bg-[#592e8e]">
          Get Pivien <FaArrowRight />
        </button>
      </div>

      <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
        <img
          src={mackbookIphone}
          alt="hero"
          className="mx-auto lg:mx-0 lg:w-full lg:max-w-lg"
        />
      </div>

      {/* Circular gradient on the right side with simulated blur */}
      <div className="absolute hidden lg:block top-0 -right-[30px] bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0  bg-[#FAE289] rounded-l-full"
          style={{
            transform: "translateX(90%)",
            filter: "blur(80px)",
          }}
        ></div>
      </div>

      {/* Circular gradient on the left side with simulated blur */}
      <div className="absolute hidden lg:block top-[50] -left-[30px] bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
          style={{
            transform: "translateX(-90%)",
            filter: "blur(90px)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GetPivien;
