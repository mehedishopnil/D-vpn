import { Outlet } from "react-router-dom";
import Header from "../pages/share/Header/Header";
import Footer from "../pages/share/Footer/Footer";
import spinAbstract from "../assets/OBJECTS.svg";
import rightSideBg from "../assets/rightSideBg.svg";

const Main = () => {
  return (
    <div className="w-full bg-[#0F0F0F] relative">
      <Header />
      <Outlet />
      <Footer />

      {/* Circular gradient on the right side with simulated blur */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-[#FAE289] rounded-l-full"
          style={{
            transform: "translateX(90%)",
            filter: "blur(80px)",
          }}
        ></div>
      </div>

      {/* Circular gradient on the left side with simulated blur */}
      <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
          style={{
            transform: "translateX(-70%)",
            filter: "blur(100px)",
          }}
        ></div>
      </div>

      {/* Abstract image */}
      <div className="absolute top-[550px] right-0 bottom-0 hidden lg:block">
        <img className="w-[1980px]" src={spinAbstract} alt="" />
      </div>

      {/* Additional gradients for larger screens */}
      <div className="hidden lg:block">
        {/* Circular gradient on the left side */}
        <div className="absolute mt-[1000px]  top-0 left-0 bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
            style={{
              transform: "translateX(-70%)",
              filter: "blur(110px)",
            }}
          ></div>
        </div>

        {/* Circular gradient on the right side */}
        <div className="absolute top-[1050px] right-0 bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-l from-[#9C25EA75] to-[#701CB060] rounded-l-full"
            style={{
              transform: "translateX(70%)",
              filter: "blur(90px)",
            }}
          ></div>
        </div>
      </div>

      {/* Additional gradients for larger screens */}
      <div className="hidden lg:block">
        {/* Circular gradient on the left side */}
        <div className="absolute mt-[700px]  top-[1000px] left-0 bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
            style={{
              transform: "translateX(-70%)",
              filter: "blur(110px)",
            }}
          ></div>
        </div>

        {/* Circular gradient on the right side with simulated blur */}
        <div className="absolute mt-[750px] top-[1000px] right-0 bottom-0  rounded-l-full overflow-hidden">
          <img
            className="w-full"
            src={rightSideBg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
