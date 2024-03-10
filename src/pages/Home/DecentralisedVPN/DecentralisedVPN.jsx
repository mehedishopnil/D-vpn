import demoImg from "../../../assets/Image Placeholder.png";

const DecentralisedVPN = () => {
  return (
    <div className="py-[214px]">
      <h1 className="text-[48px] text-center text-white ">
        key features of the <br /> decentralised VPN app
      </h1>
      <div className="flex justify-center gap-10 pt-[75px]">
        <div className="flex items-center gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8">
          <div>
            <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
            <p className="w-[342px] font-normal text-white">
              Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi aliquam
              porttitor sed tellus nisl.
            </p>
          </div>
          <img src={demoImg} alt="image" />
        </div>

        <div className="flex items-center gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8">
          <div>
            <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
            <p className="w-[342px] font-normal text-white">
              Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi aliquam
              porttitor sed tellus nisl.
            </p>
          </div>
          <img src={demoImg} alt="image" />
        </div>
      </div>

      <div className="flex justify-center mt-[27px]">
      <div className="grid grid-cols-3  gap-5 w-[1350px]  border rounded-xl   border-[#ffffff30] bg-[#ffffff25] pl-10">
        <div className="flex flex-col col-span-2 justify-center">
          <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
          <p className=" font-normal text-white">
            Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur. Ultrices
            neque faucibus nisl et facilisi luctus. Nisl eget libero at et
            nascetur. In aliquam donec elementum ante amet at scelerisque eu.
            Amet pellentesque praesent euismod.
          </p>
        </div>
        <img className=" w-[457px] h-[324px] rounded-r-xl" src={demoImg} alt="image" />
      </div>
      </div>

      <div className="flex justify-center gap-10 pt-[27px]">
        <div className="flex items-center gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8">
          <div>
            <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
            <p className="w-[342px] font-normal text-white">
              Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi aliquam
              porttitor sed tellus nisl.
            </p>
          </div>
          <img src={demoImg} alt="image" />
        </div>

        <div className="flex items-center gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8">
          <div>
            <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
            <p className="w-[342px] font-normal text-white">
              Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi aliquam
              porttitor sed tellus nisl.
            </p>
          </div>
          <img src={demoImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default DecentralisedVPN;
