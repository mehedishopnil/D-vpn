import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts'
import './TotalSupply.css'

const TotalSupply = () => {
    const chartOptions = {
        labels: ['Private round', 'Private round', 'Private round', 'Private round'],
        theme: {
          palette: 'palette1',
        },
      };
      const labelColor = {
        style:{
          colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        }
      }
    
      const chartSeries = [10, 20, 30, 40];
      const legendPosition = 'bottom';
    


  return (
    <div>
      <div className="grid grid-cols-2 w=[1268px] my-[214px] bg-[#63079F30] p-8">
      <div className="flex justify-center items-center text-white">
          <ApexCharts 
            type="donut" 
            height={800} 
            width={500}
            series={chartSeries}
            options={chartOptions}
            legend={legendPosition}
            dataLabels= {labelColor}
            
          />
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
    </div>
  );
};

export default TotalSupply;
