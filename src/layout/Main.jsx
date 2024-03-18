import { Outlet } from "react-router-dom";
import Header from "../pages/share/Header/Header";
import Footer from "../pages/share/Footer/Footer";
import spinAbstract from "../assets/OBJECTS.svg";
import rightSideBg from "../assets/rightSideBg.svg";
import leftSideBg from "../assets/9057764-02 1.svg";
import earthBgImage from "../assets/earthShape.svg";

const Main = () => {
  return (
    <div className="w-full bg-[#0F0F0F] relative">
      {/* Header */}
      <Header />

      {/* Outlet for rendering child routes */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Circular gradient on the right side with simulated blur */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
        {/* Circular gradient for InternetSecurity section */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-[#FAE289] rounded-l-full"
          style={{ transform: "translateX(90%)", filter: "blur(80px)" }}
        ></div>
      </div>

      {/* Circular gradient on the left side with simulated blur */}
      <div className="hidden z-0 lg:block absolute top-0 left-0 bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
        {/* Circular gradient for D-VPN Roadmap section */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA90] to-[#701CB090] rounded-r-full"
          style={{ transform: "translateX(-90%)", filter: "blur(100px)" }}
        ></div>
      </div>

      {/* Abstract image */}
      <div className="absolute top-[7.5%] right-0 bottom-0  lg:block">
        <img className="w-[1980px]" src={spinAbstract} alt="" />
      </div>

      {/* Additional gradients for larger screens */}
      <div className="hidden lg:block">
        {/* Circular gradient on the left side Available Servers section */}
        <div className="absolute top-[13%] left-0 bottom-0 w-[700px] h-[745px] rounded-r-full overflow-hidden">
          {/* Circular gradient for Available Servers section */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA90] to-[#701CB090] rounded-r-full"
            style={{ transform: "translateX(-90%)", filter: "blur(110px)" }}
          ></div>
        </div>

        {/* Circular gradient on the right side for Available Servers section */}
        <div className="absolute top-[13%] right-0 bottom-0 lg:w-[645px] lg:h-[745px] rounded-l-full overflow-hidden">
          {/* Circular gradient for Available Servers section */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#9C25EA75] to-[#701CB060] rounded-l-full"
            style={{ transform: "translateX(70%)", filter: "blur(90px)" }}
          ></div>
        </div>
      </div>

      {/* Additional gradients for larger screens */}
      <div className="hidden lg:block overflow-hidden z-0">
        {/* Circular gradient on the left side */}
        <div className="absolute top-[25%] left-0 bottom-0 lg:w-[645px] lg:h-[745px] rounded-r-full overflow-hidden">
          {/* Circular gradient for MyVPN section */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA90] to-[#701CB090] rounded-r-full"
            style={{ transform: "translateX(-90%)", filter: "blur(110px)" }}
          ></div>
        </div>

        {/* Background image on the right side for MyVPN section */}
        <div className="absolute top-[20%] right-0 bottom-0  rounded-l-full overflow-hidden">
          <img className="w-full" src={rightSideBg} alt="" />
        </div>
      </div>

      {/* Circular gradient on the right side for InternetSecurity section */}
      <div className="absolute top-[30%] right-0 bottom-0 w-[445px] h-[845px] rounded-l-full overflow-hidden lg:w-auto lg:h-auto ">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#9C25EA75] to-[#701CB030] rounded-l-full"
          style={{ transform: "translateX(50%)", filter: "blur(110px)" }}
        ></div>
      </div>

      {/* Background image on the left side for decentralised VPN section */}
      <div className="absolute top-1/2 lg:top-[50%] left-0 lg:left-0 transform -translate-y-1/2 rotate-180 rounded-l-full overflow-hidden ">
        <img
          className="w-full h-auto lg:h-full mb-[200px]"
          src={leftSideBg}
          alt=""
        />
      </div>

      {/* Circular gradient on the right side for decentralised VPN section */}
      <div className="absolute top-[45%] right-0 bottom-0 w-[445px] h-[845px] rounded-l-full overflow-hidden lg:w-auto lg:h-auto ">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#9C25EA75] to-[#701CB030] rounded-l-full"
          style={{ transform: "translateX(60%)", filter: "blur(100px)" }}
        ></div>
      </div>

      {/* Circular gradient on the left side for D-VPN Roadmap section */}
      <div className="absolute hidden lg:block top-[58%] left-0 bottom-0  rounded-r-full overflow-hidden lg:w-[645px] lg:h-[745px] w-full  h-full">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA90] to-[#701CB090] rounded-r-full"
          style={{ transform: "translateX(-90%)", filter: "blur(110px)" }}
        ></div>
      </div>

      {/* Circular gradient on the left side for total supply section */}
      <div className="absolute hidden lg:block top-[70%] left-0 bottom-0 lg:w-[645px] lg:h-[745px] rounded-r-full overflow-hidden w-full  h-full ">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA90] to-[#701CB090] rounded-r-full"
          style={{ transform: "translateX(-85%)", filter: "blur(110px)" }}
        ></div>
      </div>

      {/* Circular gradient on the right side for total supply section */}
      <div className="absolute  top-[63%] right-0 bottom-0 w-[445px] h-[845px] rounded-l-full overflow-hidden lg:w-auto lg:h-auto ">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#9C25EA75] to-[#701CB030] rounded-l-full"
          style={{ transform: "translateX(50%)", filter: "blur(110px)" }}
        ></div>
      </div>

      {/* Circular gradient on the left side for Global Server Section */}
      <div className=" absolute hidden lg:block z-20 top-[88%] left-0 bottom-0 lg:w-[645px] lg:h-[745px] rounded-r-full overflow-hidden w-xl  h-xl">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA90] to-[#701CB090]  rounded-r-full"
          style={{ transform: "translateX(-90%)", filter: "blur(110px)" }}
        ></div>
      </div>

      {/* Circular gradient on the right side for footer section */}
      <div className="absolute hidden lg:block  z-20 top-[90%] right-0 bottom-0 w-[545px] h-[845px] rounded-l-full overflow-hidden lg:h-auto ">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#9C25EA75] to-[#701CB070] rounded-l-full"
          style={{ transform: "translateX(85%)", filter: "blur(150px)" }}
        ></div>
      </div>

      {/* Background image on the bottom part of the page */}
      <img
        className="absolute  bottom-0 left-0 w-full sm:top-[85%] lg:top-[77%]  z-0"
        src={earthBgImage}
        alt="Background"
      />

      <div className="absolute md:-[400px] lg:h-[796px] top-[83%]   left-0 right-0 bottom-0 bg-gradient-to-t from-[#0F0F0F] z-10">
      </div>

      <div className="absolute h-[348px] top-[91%] md:top-[93%] left-0 right-0 bottom-0 bg-[#0F0F0F] z-10">
      </div>

      <div className="absolute h-[448px] md:h-[400px] lg:h-[448px] top-[95%] md:top-[96%]  left-0 right-0 bottom-0 bg-[#0F0F0F] z-10">
      </div>

      
    </div>
  );
};

export default Main;
