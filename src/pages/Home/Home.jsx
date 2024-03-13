import React from "react";
import GetPivien from "./GetPivien/GetPivien";
import { Parallax } from "react-parallax";
import spinAbstract from "../../../src/assets/OBJECTS.svg";
import AvailableServers from "./AvailableServers/AvailableServers";
import MyVPN from "./MyVPN/MyVPN";
import InternetSecurity from "./InternetSecurity/InternetSecurity";
import DecentralisedVPN from "./DecentralisedVPN/DecentralisedVPN";
import VPNRoadmap from "./VPNRoadmap/VPNRoadmap";
import TotalSupply from "./TotalSupply/TotalSupply";
import GlobalServer from "./GlobalServer/GlobalServer";
import comet from "../../../src/assets/comet.svg";
import star from "../../../src/assets/Stars.svg";

const Home = () => {
  return (
    <div className="container mx-auto px-8 mt-16">
      <GetPivien />

      <div className="relative">
        {/* Set background image with parallax effect */}
        <Parallax bgImage={spinAbstract} strength={500}>
          <div className="h-screen"></div>
        </Parallax>
        {/* Apply spinning animation on hover */}
        <div className="absolute top-0 left-0 w-full h-full transition-transform transform-gpu hover:rotate-180 origin-left duration-1000">
          {/* Additional content goes here, if needed */}
        </div>
      </div>

      <AvailableServers />

      <MyVPN />

      <InternetSecurity />

      <DecentralisedVPN />

      <VPNRoadmap />

      <TotalSupply />

      <div className='relative'>
      {/* Star image with animation */}
      <img
        src={star}
        alt="Star"
        className='absolute -top-20 animate-star-flow'
      />

      {/* Comet image with animation */}
      <img
        src={comet}
        alt="Comet"
        className='absolute top-1/2 transform -translate-y-1/2 animate-comet-flow'
      />

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes starFlow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          @keyframes cometFlow {
            0% { left: 0; opacity: 0; }
            50% { left: 50%; opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
          
          .animate-star-flow {
            animation: starFlow 4s ease-in-out infinite; /* Adjust duration and timing function as needed */
          }

          .animate-comet-flow {
            animation: cometFlow 5s linear infinite; /* Adjust duration and timing function as needed */
          }
        `}
      </style>
    </div>

      <GlobalServer />
    </div>
  );
};

export default Home;
