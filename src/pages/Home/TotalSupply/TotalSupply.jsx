import ApexCharts from "react-apexcharts";
import { useEffect, useState } from "react";

const TotalSupply = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Configuration options for ApexCharts
  const chartOptions = {
    labels: [
      "Private round",
      "Private round",
      "Private round",
      "Private round",
    ],
    theme: { palette: "palette1" },
  };

  // Styling for label colors
  const labelColor = {
    style: { colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"] },
  };

  // Data series for ApexCharts
  const chartSeries = [10, 20, 30, 40];
  const legendPosition = "bottom";

  return (
    <div className="container mx-auto my-8 overflow-hidden">
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:gap-5 border border-[#ffffff30] rounded-xl shadow-inner shadow-[#63079F] bg-[#FFFFFF20] p-8">
        {/* Chart */}
        <div className="flex flex-col items-center w-full sm:w-[500px] relative">
          <div className="flex justify-center">
            <ApexCharts
              type="donut"
              height={windowWidth >= 768 ? 400 : 300}
              width={windowWidth >= 768 ? 500 : 300}
              series={chartSeries}
              options={chartOptions}
              legend={legendPosition}
              dataLabels={labelColor}
            />
          </div>
          {/* Total Supply */}
          <div className=" lg:absolute mt-10 lg:mt-0 lg:left-[200px] top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2  text-center  text-white">
            <h1 className="text-[14px] lg:text-[18px] font-bold">Total Supply</h1>
            <h1 className="text-[18px] lg:text-[24px] font-bold">50,000,000</h1>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-3 w-full sm:w-[400px]">
          {/* Repeat for each detail */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col rounded-md w-full h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10]"
            >
              <div className="flex justify-between items-center h-full">
                <div>
                  <h1 className="text-[18px] font-bold text-white">11% Team</h1>
                  <p className="text-[15px] text-[#ffffff60]">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-[#ffffff70]">Amount</p>
                  <h1 className="text-[17px] font-bold text-white">5,500,000</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSupply;
