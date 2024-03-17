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
    <div className="container mx-auto my-8 ">
      <div className="flex flex-col sm:flex-col lg:grid lg:grid-cols-5 md:flex-col md:items-center items-center gap-10  sm:justify-center sm:gap-5 border border-[#ffffff30] rounded-xl shadow-inner shadow-[#63079F] bg-[#FFFFFF20] p-8">

        {/* Chart */}
        <div className="flex  md:flex md:flex-col lg:col-span-3  md:items-center flex-col items-center  w-full md:w-full sm:w-[500px] relative">
          <div className="flex justify-center">
            <ApexCharts
              type="donut"
              height={windowWidth >= 768 ? (windowWidth >= 1024 ? 400 : 300) : 200}
              width={windowWidth >= 768 ? (windowWidth >= 1024 ? 500 : 400) : 300}
              series={chartSeries}
              options={chartOptions}
              legend={legendPosition}
              dataLabels={labelColor}
            />
          </div>
          {/* Total Supply */}
          <div className="lg:absolute lg:top-[35%] lg:mr-[15%] mt-5 mr-20 md:text-right text-center text-white">
            <h1 className="text-sm md:text-lg font-bold">Total Supply</h1>
            <h1 className="text-lg md:text-xl font-bold">50,000,000</h1>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col lg:col-span-2 lg:items-end gap-3 w-full lg:w-full sm:w-[400px]">
          {/* Repeat for each detail */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col rounded-md w-full h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10]"
            >
              <div className="flex justify-between items-center gap-2 h-full">
                <div>
                  <h1 className="text-[15px] md:text-[18px] lg:text-[18px] font-bold text-white">11% Team</h1>
                  <p className="text-[12px] md:text-[15px] lg:text-[15px] text-[#ffffff60]">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-[#ffffff70]">Amount</p>
                  <h1 className="text-[14px] md:text-[17px] lg:text-[17px] font-bold text-white">5,500,000</h1>
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
