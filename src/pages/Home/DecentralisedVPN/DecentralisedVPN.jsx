import demoImg from "../../../assets/Image Placeholder.png";

const DecentralisedVPN = () => {
  return (
    <div className="relative mt-24 lg:mt-0 overflow-hidden">
      <div className="container lg:flex lg:flex-col lg:items-center mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl lg:w-1/2 leading-snug lg:text-5xl lg:leading-snug text-center text-white mb-8">
            Key features of the decentralised VPN app
          </h1>
          {/* First row */}
          <div className="flex flex-col lg:grid lg:grid-cols-2  justify-center gap-5 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:flex lg:items-center gap-5 border rounded-xl p-5 border-[#ffffff30] bg-[#ffffff25] ">
              <div className=" text-center lg:text-start">
                <h1 className="text-2xl lg:text-3xl text-white mb-2">
                  Lorem ipsum dolor
                </h1>
                <p className="text-white text-lg lg:w-[342px] font-normal">
                  Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                  aliquam porttitor sed tellus nisl.
                </p>
              </div>
              <img
                src={demoImg}
                alt="image"
                className="cover w-auto mt-3 lg:mt-0  lg:w-auto"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:flex lg:items-center gap-5 border rounded-xl p-5 border-[#ffffff30] bg-[#ffffff25] ">
              <div className=" text-center lg:text-start">
                <h1 className="text-2xl lg:text-3xl text-white mb-2">
                  Lorem ipsum dolor
                </h1>
                <p className="text-white text-lg lg:w-[342px] font-normal">
                  Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                  aliquam porttitor sed tellus nisl.
                </p>
              </div>
              <img
                src={demoImg}
                alt="image"
                className="cover w-auto mt-3 lg:mt-0  lg:w-auto"
              />
            </div>
            
          </div>
        </div>

        {/* Second row */}
        <div className="grid lg:grid-cols-3 mt-5 gap-5 w-full lg:w-[1300px] border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8 ">
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

        {/* Third row */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 mt-5 justify-center gap-5 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:flex lg:items-center gap-5 border rounded-xl p-5 border-[#ffffff30] bg-[#ffffff25] ">
              <div className=" text-center lg:text-start">
                <h1 className="text-2xl lg:text-3xl text-white mb-2">
                  Lorem ipsum dolor
                </h1>
                <p className="text-white text-lg lg:w-[342px] font-normal">
                  Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                  aliquam porttitor sed tellus nisl.
                </p>
              </div>
              <img
                src={demoImg}
                alt="image"
                className="cover w-auto mt-3 lg:mt-0  lg:w-auto"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:flex lg:items-center gap-5 border rounded-xl p-5 border-[#ffffff30] bg-[#ffffff25] ">
              <div className=" text-center lg:text-start">
                <h1 className="text-2xl lg:text-3xl text-white mb-2">
                  Lorem ipsum dolor
                </h1>
                <p className="text-white text-lg lg:w-[342px] font-normal">
                  Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                  aliquam porttitor sed tellus nisl.
                </p>
              </div>
              <img
                src={demoImg}
                alt="image"
                className="cover w-auto mt-3 lg:mt-0  lg:w-auto"
              />
            </div>
            
          </div>
      </div>
    </div>
  );
};

export default DecentralisedVPN;
