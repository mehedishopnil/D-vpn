import mackbookIphone from "../../../assets/macbookiphone14mockup11fp 1.svg";
import { FaArrowRight } from "react-icons/fa6";
import "./GetPivien.css";

const GetPivien = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center lg:space-x-10 px-5 lg:px-20 py-10 lg:py-16">
      <div className="text-center md:w-[428px] lg:w-[528px] z-10 md:text-left lg:text-left space-y-5">
        {/* Apply gradient to the text */}
        <p className="text-[20px] font-bold gradient-text">
          Fun. Fast. Free.
        </p>
        <h2 className="text-white text-4xl md:text-3xl lg:text-5xl  md:leading-snug  font-bold lg:leading-snug">
          Stay <span className="text-[#701CB0]">Private</span> and
           Access Worldwide Content
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
          className="mx-auto lg:mx-0 md:w-8/12 lg:w-full lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default GetPivien;
