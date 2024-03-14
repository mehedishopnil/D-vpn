import demoImg from "../../../assets/Image Placeholder.png";
import DecentralisedbgImage from "../../../assets/9057764-02 1.svg";

const DecentralisedVPN = () => {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <h1 className="text-4xl lg:text-5xl text-center text-white mb-12 lg:mb-16">
          Key features of the decentralised VPN app
        </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-x-10 mb-12 lg:mb-16">
          <div className="flex flex-col items-center lg:items-start gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8 mb-8 lg:mb-0">
            <div>
              <h1 className="text-2xl lg:text-3xl text-white mb-2">
                Lorem ipsum dolor
              </h1>
              <p className="text-white text-lg lg:w-[342px] font-normal">
                Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                aliquam porttitor sed tellus nisl.
              </p>
            </div>
            <img src={demoImg} alt="image" className="w-40 lg:w-auto" />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8 mb-8 lg:mb-0">
            <div>
              <h1 className="text-2xl lg:text-3xl text-white mb-2">
                Lorem ipsum dolor
              </h1>
              <p className="text-white text-lg lg:w-[342px] font-normal">
                Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                aliquam porttitor sed tellus nisl.
              </p>
            </div>
            <img src={demoImg} alt="image" className="w-40 lg:w-auto" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 w-full max-w-[1350px] border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8 mb-12 lg:mb-16">
          <div className="col-span-2 flex flex-col justify-center">
            <h1 className="text-2xl lg:text-3xl text-white mb-2">
              Lorem ipsum dolor
            </h1>
            <p className="text-white text-lg font-normal">
              Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Ultrices
              neque faucibus nisl et facilisi luctus. Nisl eget libero at et
              nascetur. In aliquam donec elementum ante amet at scelerisque eu.
              Amet pellentesque praesent euismod.
            </p>
          </div>
          <img
            src={demoImg}
            alt="image"
            className="w-full lg:w-[457px] h-[324px] rounded-r-xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-x-10 mb-12 lg:mb-16">
          <div className="flex flex-col items-center lg:items-start gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8 mb-8 lg:mb-0">
            <div>
              <h1 className="text-2xl lg:text-3xl text-white mb-2">
                Lorem ipsum dolor
              </h1>
              <p className="text-white text-lg lg:w-[342px] font-normal">
                Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                aliquam porttitor sed tellus nisl.
              </p>
            </div>
            <img src={demoImg} alt="image" className="w-40 lg:w-auto" />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8 mb-8 lg:mb-0">
            <div>
              <h1 className="text-2xl lg:text-3xl text-white mb-2">
                Lorem ipsum dolor
              </h1>
              <p className="text-white text-lg lg:w-[342px] font-normal">
                Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                aliquam porttitor sed tellus nisl.
              </p>
            </div>
            <img src={demoImg} alt="image" className="w-40 lg:w-auto" />
          </div>
        </div>
      </div>

      {/* Circular gradient on the right side with simulated blur */}
      <div className="absolute top-0 lg:top-[400px] -right-4 lg:right-[30px] bottom-0 w-[60%] lg:w-[645px] h-[50%] lg:h-[745px] rounded-l-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#9C25EA75] to-[#701CB060] rounded-l-full"
          style={{ transform: "translateX(80%)", filter: "blur(60px)" }}
        ></div>
      </div>

      {/* Background image on the left side middle */}
      <div className="absolute top-1/2 lg:top-[50%] -left-4 lg:left-[30px] transform -translate-y-1/2 rotate-180 rounded-l-full overflow-hidden">
        <img
          className="w-full h-auto lg:h-full mb-[200px]"
          src={DecentralisedbgImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default DecentralisedVPN;
