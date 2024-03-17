import demoImg from "../../../assets/Image Placeholder.png";

const DecentralisedVPN = () => {
  return (
    <div className="relative mt-24 lg:mt-0 ">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl lg:w-1/2 leading-snug lg:text-5xl lg:leading-snug text-center text-white mb-8">
            Key features of the decentralised VPN app
          </h1>

          {/* First row */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-5">
  {/* first layout */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-[#ffffff25] rounded-xl p-5 border border-[#ffffff30]">
    <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
      <h1 className="text-xl  lg:text-2xl text-white mb-2">
        Lorem ipsum dolor
      </h1>
      <p className="text-white text-[14px]  md:w-full lg:w-full font-normal">
        Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi aliquam porttitor sed tellus nisl.
      </p>
    </div>
    <div className="flex justify-center items-center mt-5">
      <img
        src={demoImg}
        alt="image"
        className="w-[400px] h-[250px] md:w-auto md:h-auto lg:w-auto lg:h-auto"
      />
    </div>
  </div>

  {/* Second layout */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-[#ffffff25] rounded-xl p-5 border border-[#ffffff30]">
    <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
      <h1 className="text-xl  lg:text-2xl text-white mb-2">
        Lorem ipsum dolor
      </h1>
      <p className="text-white text-[14px]  md:w-full lg:w-full font-normal">
        Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi aliquam porttitor sed tellus nisl.
      </p>
    </div>
    <div className="flex justify-center items-center mt-5">
      <img
        src={demoImg}
        alt="image"
        className=" w-[400px] h-[250px] md:w-auto md:h-auto lg:w-auto lg:h-auto"
      />
    </div>
  </div>
</div>

          {/* Second row */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 bg-[#ffffff25] rounded-xl p-5 gap-5 border border-[#ffffff30]">
            {/* Text content */}
            <div className="text-center md:text-start lg:text-start lg:col-span-3 flex flex-col justify-center">
              <h1 className="text-xl lg:text-2xl text-white mb-2">
                Lorem ipsum dolor
              </h1>
              <p className="text-white text-[14px] md:w-full lg:w-full font-normal">
                Lorem ipsum dolor sit amet consectetur. Ultrices neque faucibus
                nisl et facilisi luctus. Nisl eget libero at et nascetur. In
                aliquam donec elementum ante amet at scelerisque eu. Amet
                pellentesque praesent euismod.
              </p>
            </div>
            {/* Image */}
            <div className=" lg:col-span-2 lg:text-right flex justify-center md:justify-end lg:justify-end">
              <img
                src={demoImg}
                alt="image"
                className="w-[400px] h-[250px] mt-3 lg:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecentralisedVPN;
