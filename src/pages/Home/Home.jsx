import GetPivien from "./GetPivien/GetPivien";
import spinAbstract from "../../../src/assets/OBJECTS.svg";
import AvailableServers from "./AvailableServers/AvailableServers";
import MyVPN from "./MyVPN/MyVPN";
import InternetSecurity from "./InternetSecurity/InternetSecurity";
import DecentralisedVPN from "./DecentralisedVPN/DecentralisedVPN";
import VPNRoadmap from "./VPNRoadmap/VPNRoadmap";
import TotalSupply from "./TotalSupply/TotalSupply";
import GlobalServer from "./GlobalServer/GlobalServer";
import comet from "../../../src/assets/comet.svg";
import Stars from "../../components/Stars";
// import Stars from "../../../src/assets/Stars.svg";

const Home = () => {
  return (
    <div className="container mx-auto px-8 mt-16">
      <div className="relative">
        <Stars></Stars>
      </div>
      
      <GetPivien />

      
      <div>
        <img src={spinAbstract} alt="" />
      </div>
      

      <AvailableServers />

      <div className="relative">
        <Stars></Stars>
      </div>

      <MyVPN />

      <div className="relative">
        <Stars></Stars>
      </div>

      <InternetSecurity />

      <div className="relative">
        <Stars></Stars>
      </div>

      <DecentralisedVPN />

      <div className="relative">
        <Stars></Stars>
      </div>

      <VPNRoadmap />

      <TotalSupply />

      <div className="relative">
        {/* Star image with animation */}
        <Stars></Stars>

        {/* Comet image with animation */}
        <img
          src={comet}
          alt="Comet"
          className="absolute top-10 transform -translate-y-1/2 animate-comet-flow"
        />

        {/* Animation keyframes */}
        <style>
          {`


            @keyframes cometFlow {
              0% { left: 0; opacity: 0; }
              50% { left: 50%; opacity: 1; }
              100% { left: 100%; opacity: 0; }
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
