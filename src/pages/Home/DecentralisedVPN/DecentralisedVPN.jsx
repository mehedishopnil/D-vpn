import demoImg from "../../../assets/Image Placeholder.png";

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

     

      
    </div>
  );
};

export default DecentralisedVPN;
