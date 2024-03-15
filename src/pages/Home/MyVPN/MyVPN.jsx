import icon1 from "../../../assets/security.svg";
import icon2 from "../../../assets/loop.svg";
import icon3 from "../../../assets/connctivity.svg";


const MyVPN = () => {
  return (
  <div className="relative w-full my-[150px] overflow-hidden">
     <div className="flex flex-col items-center w-full ">
      <h1 className="w-10/12 leading-sung  text-3xl lg:leading-snug text-center lg:text-5xl text-white">
        What Makes MyVPN a Good Choice
      </h1>

      <div className="flex flex-col gap-5 lg:flex-row justify-center mt-[50px] lg:gap-5">
        <div className="lg:w-[411px] space-y-3 p-8 lg:space-y-5 rounded-lg bg-[#ffffff10] border border-[#ffffff23] bg-blur">
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

        <div className="lg:w-[411px] space-y-3 p-8 lg:space-y-5 rounded-lg bg-[#ffffff10] border border-[#ffffff23] bg-blur">
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

        <div className="lg:w-[411px] space-y-3 p-8 lg:space-y-5 rounded-lg bg-[#ffffff10] border border-[#ffffff23] bg-blur">
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

    </div>
  </div>
  );
};

export default MyVPN;
