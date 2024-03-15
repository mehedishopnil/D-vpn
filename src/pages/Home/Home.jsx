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

const Home = () => {
  return (
    <div className="container mx-auto px-8 mt-16 overflow-hidden"> {/* Parent container */}
      {/* Stars background */}
      <div className="relative">
        <Stars></Stars>
      </div>
      
      {/* Component: GetPivien */}
      <GetPivien />

      {/* Component: AvailableServers */}
      <AvailableServers />

      {/* Stars background */}
      <div className="relative">
        <Stars></Stars>
      </div>

      {/* Component: MyVPN */}
      <MyVPN />

      {/* Stars background */}
      <div className="relative">
        <Stars></Stars>
      </div>

      {/* Component: InternetSecurity */}
      <InternetSecurity />

      {/* Stars background */}
      <div className="relative">
        <Stars></Stars>
      </div>

      {/* Component: DecentralisedVPN */}
      <DecentralisedVPN />

      {/* Stars background */}
      <div className="relative">
        <Stars></Stars>
      </div>

      {/* Component: VPNRoadmap */}
      <VPNRoadmap />

      {/* Component: TotalSupply */}
      <TotalSupply />

      {/* Animation section */}
      <div className="relative">
        {/* Stars background */}
        <Stars></Stars>

        {/* Comet animation */}
        <img
          src={comet}
          alt="Comet"
          className="absolute top-10 transform -translate-y-1/2 animate-comet-flow overflow-hidden"
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

      {/* Component: GlobalServer */}
      <GlobalServer />
    </div>
  );
};

export default Home;
