import React, { useEffect } from "react";
import ApexCharts from "react-apexcharts";
import "./TotalSupply.css";

// Functional component for TotalSupply
const TotalSupply = () => {
  // Configuration options for ApexCharts
  const chartOptions = {
    labels: [
      "Private round",
      "Private round",
      "Private round",
      "Private round",
    ],
    theme: {
      palette: "palette1",
    },
  };

  // Styling for label colors
  const labelColor = {
    style: {
      colors: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    },
  };

  // Data series for ApexCharts
  const chartSeries = [10, 20, 30, 40];
  const legendPosition = "bottom";

  return (
    <div className="my-[150px] relative mx-10">
      <div className="container mx-auto grid grid-cols-2 w=[1000px] border border-[#ffffff30] rounded-xl  shadow-inner shadow-[#63079F]  bg-[#FFFFFF20] p-8">

        {/* Section for ApexCharts donut chart */}
        <div className="flex flex-col justify-center items-center text-white relative">
          <ApexCharts
            type="donut"
            height={800}
            width={500}
            series={chartSeries}
            options={chartOptions}
            legend={legendPosition}
            dataLabels={labelColor}
          />

          {/* Position the text in the middle of the chart */}
          <div className="absolute bottom-10 inset-0 flex items-center justify-center">
            <h1 className="text-[18px] font-bold -ml-28">Total Supply</h1>
            <h1 className="text-[22px] font-sm pt-16 -ml-28">50 000 000</h1>
            
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>

          <div className="flex justify-between items-center rounded-md w-[521px] h-[74px] px-[25.5px] py-[2.5px] border border-[#ffffff30] bg-[#ffffff10] ">
            <div>
              <h1 className="text-[18px] font-bold text-white">11% Team</h1>
              <p className="text-[18px] text-[#ffffff60]">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <p className="text-[15px] text-[#ffffff70]">Amount</p>
              <h1 className="text-[17px] font-bold text-white">5500 000</h1>
            </div>
          </div>
        </div>
      </div>

    {/* Circular gradient on the right side with simulated blur */}
      <div className="absolute -top-[150px] right-0 bottom-0 w-[645px] h-[745px] rounded-l-full overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-l from-[#9C25EA75] to-[#701CB060] rounded-l-full"
          style={{
            transform: "translateX(80%)",
            filter: "blur(60px)",
          }}
        ></div>
      </div>


   {/* Circular gradient on the left side with simulated blur */}
<div className="absolute top-[350px] left-0 bottom-0 w-[645px] h-[745px] rounded-r-full overflow-hidden">
  <div
    className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#9C25EA75] to-[#701CB060] rounded-r-full"
    style={{
      transform: "translateX(-80%)",
      filter: "blur(60px)",
    }}
  ></div>
</div>


    </div>
  );
};

export default TotalSupply;
