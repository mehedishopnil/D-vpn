import stars from "../../src/assets/Stars.svg";
import React from "react";

const Stars = () => {
  return (
    <div className="absolute -top-10 animate-star-flow overflow-hidden">
      <img src={stars} alt="Star" />

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes starFlow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          
          .animate-star-flow {
            animation: starFlow 4s ease-in-out infinite; /* Adjust duration and timing function as needed */
          }
        `}
      </style>
    </div>
  );
};

export default Stars;

