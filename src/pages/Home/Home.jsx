import React from 'react';
import GetPivien from './GetPivien/GetPivien';
import { Parallax } from 'react-parallax';
import spinAbstract from '../../../src/assets/OBJECTS.svg';
import AvailableServers from './AvailableServers/AvailableServers';
import MyVPN from './MyVPN/MyVPN';
import InternetSecurity from './InternetSecurity/InternetSecurity';
import DecentralisedVPN from './DecentralisedVPN/DecentralisedVPN';
import VPNRoadmap from './VPNRoadmap/VPNRoadmap';
import TotalSupply from './TotalSupply/TotalSupply';
import GlobalServer from './GlobalServer/GlobalServer';

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

      <AvailableServers></AvailableServers>

      <MyVPN />

      <InternetSecurity />

      <DecentralisedVPN />

      <VPNRoadmap />

      <TotalSupply />

      <GlobalServer />
    </div>
  );
};

export default Home;
