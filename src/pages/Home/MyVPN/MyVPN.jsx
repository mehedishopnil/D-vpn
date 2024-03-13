import icon1 from "../../../assets/security.svg";
import icon2 from "../../../assets/loop.svg";
import icon3 from "../../../assets/connctivity.svg";
import rightSideBg from "../../../assets/rightSideBg.svg";

const MyVPN = () => {
  return (
    <div className="relative my-[150px]">
      <h1 className="text-3xl text-center lg:text-5xl text-white">
        What Makes MyVPN a <br /> Good Choice
      </h1>

      <div className="flex flex-col lg:flex-row justify-center mt-[50px] lg:gap-5">
        <div className="lg:w-[411px] p-8 rounded-lg bg-[#ffffff10] border border-[#ffffff23] bg-blur">
          <img
            className="w-[73px] h-[73px] p-2 rounded-lg bg-[#00000010] border border-[#ffffff23]"
            src={icon1}
            alt="MyVPN"
          />
          <h1 className="text-white text-2xl">Stronger Data Protection</h1>
          <p className="text-white text-base font-light">
            Lorem ipsum dolor sit amet consectetur. Sapien porttitor purus ut
            tincidunt egestas. Lacinia ac tortor.
          </p>
        </div>

        <div className="lg:w-[411px] p-8 rounded-lg bg-[#ffffff10] border border-[#ffffff23] lg:mt-0 mt-5">
          <img
            className="w-[73px] h-[73px] p-2 rounded-lg bg-[#00000010] border border-[#ffffff23]"
            src={icon2}
            alt="MyVPN"
          />
          <h1 className="text-white text-2xl">Stronger Data Protection</h1>
          <p className="text-white text-base font-light">
            Lorem ipsum dolor sit amet consectetur. Sapien porttitor purus ut
            tincidunt egestas. Lacinia ac tortor.
          </p>
        </div>

        <div className="lg:w-[411px] p-8 rounded-lg bg-[#ffffff10] border border-[#ffffff23] lg:mt-0 mt-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff10] to-transparent filter blur-[5px]"></div>
          <img
            className="w-[73px] h-[73px] p-2 rounded-lg bg-[#00000010] border border-[#ffffff23]"
            src={icon3}
            alt="MyVPN"
          />
          <h1 className="text-white text-2xl">Stronger Data Protection</h1>
          <p className="text-white text-base font-light">
            Lorem ipsum dolor sit amet consectetur. Sapien porttitor purus ut
            tincidunt egestas. Lacinia ac tortor.
          </p>
        </div>
      </div>

      {/* Circular gradient on the left side with simulated blur */}
      <div className="absolute -top-16 -left-[80px] bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
          style={{
            transform: "translateX(-90%)",
            filter: "blur(60px)",
          }}
        ></div>
      </div>

      {/* Circular gradient in the middle with simulated blur */}
      <div className="absolute top-[50%] -left-[30px] transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA00] to-[#701CB090] rounded-full"
          style={{
            transform: "translate(90%)",
            filter: "blur(60px)",
          }}
        ></div>
      </div>

      {/* Circular gradient on the right side with simulated blur */}
      <div className="absolute -top-[150px] right-0 bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
        <img className="w-[1163.86px] h-[931.62px]" src={rightSideBg} alt="" />
      </div>
    </div>
  );
};

export default MyVPN;
