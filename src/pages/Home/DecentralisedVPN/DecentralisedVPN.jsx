import demoImg from "../../../assets/Image Placeholder.png";
import DecentralisedbgImage from "../../../assets/9057764-02 1.svg";

const DecentralisedVPN = () => {
  return (
    <div className="my-[150px] relative">
      <div className="relative z-10">
        <h1 className="text-[48px] text-center text-white ">
          key features of the <br /> decentralised VPN app
        </h1>
        <div className="flex justify-center gap-10 pt-[75px]">
          <div className="flex items-center gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8">
            <div>
              <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
              <p className="w-[342px] font-normal text-white">
                Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                aliquam porttitor sed tellus nisl.
              </p>
            </div>
            <img src={demoImg} alt="image" />
          </div>

          <div className="flex items-center gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8">
            <div>
              <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
              <p className="w-[342px] font-normal text-white">
                Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                aliquam porttitor sed tellus nisl.
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
                Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur.
                Ultrices neque faucibus nisl et facilisi luctus. Nisl eget
                libero at et nascetur. In aliquam donec elementum ante amet at
                scelerisque eu. Amet pellentesque praesent euismod.
              </p>
            </div>
            <img
              className=" w-[457px] h-[324px] rounded-r-xl"
              src={demoImg}
              alt="image"
            />
          </div>
        </div>

        <div className="flex justify-center gap-10 pt-[27px]">
          <div className="flex items-center gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8">
            <div>
              <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
              <p className="w-[342px] font-normal text-white">
                Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                aliquam porttitor sed tellus nisl.
              </p>
            </div>
            <img src={demoImg} alt="image" />
          </div>

          <div className="flex items-center gap-5 border rounded-xl border-[#ffffff30] bg-[#ffffff25] p-8">
            <div>
              <h1 className="text-[38px] text-white">Lorem ipsum dolor</h1>
              <p className="w-[342px] font-normal text-white">
                Lorem ipsum dolor sit amet consectetur. Eget nunc ut morbi
                aliquam porttitor sed tellus nisl.
              </p>
            </div>
            <img src={demoImg} alt="image" />
          </div>
        </div>
      </div>

      {/* Circular gradient on the right side with simulated blur */}
      <div className="absolute top-[600px] right-0 bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-l from-[#9C25EA75] to-[#701CB060] rounded-l-full"
          style={{
            transform: "translateX(80%)",
            filter: "blur(60px)",
          }}
        ></div>
      </div>

      {/*background image on the left side middle */}
      <div className="absolute top-0 left-0 bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url${DecentralisedbgImage}`, // Add your background image URL here
            filter: "blur(60px)",
          }}
        ></div>
      </div>

    </div>
  );
};

export default DecentralisedVPN;
